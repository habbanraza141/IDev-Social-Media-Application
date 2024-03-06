//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, PermissionsAndroid, Platform } from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import HeaderComp from '../../Components/HeaderComp';
import { FlashList } from '@shopify/flash-list';
import { moderateScale, moderateScaleVertical, width } from '../../styles/responsiveSize';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import ButtonComp from '../../Components/ButtonComp';
import navigationStrings from '../../Navigation/navigationStrings';
import ImagePicker from 'react-native-image-crop-picker';


// create a component
const CreatePost = ({ navigation }) => {


    const [photos, setPhotos] = useState([])
    const [selectedImages, setSelectedImages] = useState([])
    const [currentImage, setCurrentImage] = useState({})

    async function hasAndroidPermission() {

        const getCheckPermissionPromise = () => {
            if (Platform.Version >= 33) {
                return Promise.all([
                    PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES),
                    PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO),
                ]).then(
                    ([hasReadMediaImagesPermission, hasReadMediaVideoPermission]) =>
                        hasReadMediaImagesPermission && hasReadMediaVideoPermission,
                );
            } else {
                return PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
            }
        };

        const hasPermission = await getCheckPermissionPromise();
        if (hasPermission) {
            return true;
        }

        const getRequestPermissionPromise = () => {
            if (Platform.Version >= 33) {
                return PermissionsAndroid.requestMultiple([
                    PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
                    PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
                ]).then(
                    (statuses) =>
                        statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES] ===
                        PermissionsAndroid.RESULTS.GRANTED &&
                        statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO] ===
                        PermissionsAndroid.RESULTS.GRANTED,
                );
            } else {
                return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE).then((status) => status === PermissionsAndroid.RESULTS.GRANTED);
            }
        };

        return await getRequestPermissionPromise();
    }

    async function savePicture() {
        if (Platform.OS === "android" && !(await hasAndroidPermission())) {
            return;
        }
        try {
            let res = await CameraRoll.getPhotos({ first: 50 })
            const result = res.edges.map((val, i) => val.node)
            setCurrentImage(result[0])
            setPhotos(result)
        } catch (error) {
            console.log("error raised")
        }

    };

    useEffect(() => {
        savePicture()
    }, [])

    console.log("res++++camera roll", photos)

    const onSelect = (item, index) => {

        let clonePhotos = [...photos]

        clonePhotos[index].isSelected = !item?.isSelected
        setPhotos(clonePhotos)
        setCurrentImage(item)

        let cloneSelectImg = [...selectedImages]

        const indexItem = cloneSelectImg.findIndex(val => val.timestamp === item?.timestamp)
        if (indexItem === -1) {
            setSelectedImages(prev => [...prev, ...[item]]);
        } else {
            cloneSelectImg.splice(indexItem, 1);
            setSelectedImages(cloneSelectImg)
        }
    }

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => onSelect(item, index)}
            >
                <Image
                    source={{ uri: item.image.uri }}
                    style={{
                        height: width / 4,
                        width: width / 4,
                        borderWidth: 0.5,
                        borderColor: colors.whiteOpacity70
                    }}
                />
                {!!item?.isSelected ?
                    <Image

                        style={styles.checkStyle} source={imagePath.icCheck} /> : null}
            </TouchableOpacity>
        )
    }

    const listHeaderComponent = () => {
        return (
            <View style={{ marginBottom: moderateScaleVertical(16) }}>
                {!!currentImage?.image && currentImage?.image?.uri ? <Image
                    source={{ uri: currentImage.image.uri }}
                    style={styles.parentImage}
                /> : null}
            </View>
        )
    }

    const onNext = () => {
        navigation.navigate(navigationStrings.ADD_POST, { selectedImages })
    }

    const onPressCamera = () =>{
        ImagePicker.openPicker({
            width: 300,
            height: 400,
          }).then(image => {
            navigation.navigate(navigationStrings.ADD_POST, { selectedImages: [{image: image}] })
          }).catch((error)=>{
            console.log("error riased",error)
          });
    }
    return (
        <WrapperContainer>
            <HeaderComp
                leftText='Add post'
                isLeftImage={false}
                rightText='Next'
                onPressRight={onNext}
            />
            <View style={{ flex: 1 }}>

                <FlashList
                    numColumns={4}
                    data={photos}
                    renderItem={renderItem}
                    ListHeaderComponent={listHeaderComponent}
                    keyExtractor={(item, index) => String(item?.image?.uri || index)}
                    estimatedItemSize={moderateScale(80)}
                />

                <TouchableOpacity onPress={onPressCamera} style={styles.cameraBtn}>
                    <Image style={{ tintColor: colors.whiteColor, height: moderateScale(30), width: moderateScale(30) }} source={imagePath.icCamera} />
                </TouchableOpacity>
                {/* 
                <ButtonComp 
                text={'Save picture'}
                onPress={savePicture}/> */}

            </View>
        </WrapperContainer>
    );
};

// define your styles
const styles = StyleSheet.create({
    parentImage: {
        width: '100%',
        height: moderateScale(200)
    },
    checkStyle: {
        position: 'absolute',
        right: 5,
        top: 5,
        tintColor: colors.blueColor,
        height: 20,
        width: 20
    },
    cameraBtn: {
        height: moderateScale(60),
        width: moderateScale(60),
        borderRadius: moderateScale(30),
        backgroundColor: colors.redColor,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20,
    }
});

//make this component available to the app
export default CreatePost;
