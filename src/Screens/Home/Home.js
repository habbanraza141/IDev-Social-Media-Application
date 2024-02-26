//import liraries
import React, { useCallback } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FlashList } from "@shopify/flash-list";
import WrapperContainer from '../../Components/WrapperContainer';
import styles from './styles';
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize';
import FastImageComp from '../../Components/FastImageComp';
import imagePath from '../../constants/imagePath';
import TextComp from '../../Components/TextComp';
import { useSelector } from 'react-redux';
import colors from '../../styles/colors';

const DATA = [
    {
        title: "First Item",
    },
    {
        title: "Second Item",
    },
];



const Home = () => {
    const { selectedTheme } = useSelector(state => state?.appSettings)

    const renderItem = useCallback(({ item, index }) => {
        return (
            <View style={styles.boxStyle} >
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                        <FastImageComp
                            imageStyle={styles.profileImage}
                            url={'https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg'} />
                        <View>

                            <TextComp
                                style={styles.nameStyle}
                                text={'Goju Satru'} />

                            <TextComp
                                text={'Dummy data'}
                                style={{
                                    ...styles.bioStyle,
                                    color: selectedTheme == 'dark' ? colors.white : colors.black
                                }}
                            />

                        </View>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.7}>
                        <Image
                            resizeMode='contain'
                            style={{ height: 20, width: 20 }}
                            source={imagePath.icEdit} />
                    </TouchableOpacity>

                </View>

                <FastImageComp
                    imageStyle={styles.postImage}
                    url={'https://i2.wp.com/i.imgur.com/C4EKjFB.jpg'} />

                <TextComp
                    style={styles.descStyle}
                    text={'Ksfjdskfjn skdnks ksdns ksndksn g fnkdn dnfdnf sdnksn mcnjdnf nfjdnf'} > </TextComp>

                <TextComp
                    style={{
                        ...styles.descStyle,
                        marginVertical: moderateScaleVertical(12),
                        color: selectedTheme == 'dark' ? colors.white : colors.black
                    }}
                    text={'1 hr'} > </TextComp>

                <View style={styles.flexHorizontal}>
                    <View style={{ flexDirection: 'row' }}>
                        <TextComp
                            text={`Comments ${20}`}
                            style={{ ...styles.descStyle, marginRight: moderateScale(10) }} />
                        <TextComp
                            text={`Likes ${20}`}
                            style={styles.descStyle} />
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.7}>
                        <Image
                            resizeMode='contain'
                            style={{ height: 20, width: 20 }}
                            source={imagePath.icShare} />
                    </TouchableOpacity>
                </View>

            </View>
        )
    }, [])

    return (
        <WrapperContainer style={styles.container}>
            <View style={{ flex: 1, padding: moderateScale(8) }} >
                <FlashList
                    data={DATA}
                    renderItem={renderItem}
                    estimatedItemSize={200}
                    ItemSeparatorComponent={() => <View style={{ height: moderateScale(20) }} />}
                />
            </View>
        </WrapperContainer>
    );
};



//make this component available to the app
export default Home;
