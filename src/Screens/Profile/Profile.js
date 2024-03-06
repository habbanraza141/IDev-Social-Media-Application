//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import { moderateScale, moderateScaleVertical, textScale, width } from '../../styles/responsiveSize';
import FastImageComp from '../../Components/FastImageComp';
import TextComp from '../../Components/TextComp';
import colors from '../../styles/colors';
import { useSelector } from 'react-redux';
import navigationStrings from '../../Navigation/navigationStrings';
import { FlashList } from '@shopify/flash-list';
import imagePath from '../../constants/imagePath';

// create a component
const Profile = ({ navigation }) => {
    const { selectedTheme } = useSelector(state => state?.appSettings)

    const isDark = selectedTheme == 'dark'

    const onPresPost = (item) => {
        navigation.navigate(navigationStrings.POST_DETAIL, { item: item })
    }

    const listHeader = () => {
        return (
            <View style={{ marginBottom: moderateScaleVertical(16) }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <FastImageComp
                            url={'https://i.pinimg.com/736x/f3/6c/41/f36c417c1772d17b69b7d9776dd7bf2b.jpg'}
                            imageStyle={{
                                borderRadius: moderateScale(50)
                            }}
                        />
                        <View style={{ marginLeft: moderateScale(16) }}>
                            <TextComp
                                text={'Goku'}
                                style={{ fontSize: textScale(20) }}
                            />
                            <TextComp
                                text={'goku@gmail.com'}
                                style={{ fontSize: textScale(14), color: isDark ? colors.whiteOpacity70 : colors.blackOpacity70 }}
                            />
                        </View>
                    </View>

                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => navigation.navigate(navigationStrings.PROFILE_EDIT)}
                    >
                        <Image
                            resizeMode='contain'
                            style={{ height: 20, width: 20 }}
                            source={imagePath.icEdit} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginVertical: moderateScaleVertical(16), }}>
                    <TextComp
                        text='Developed a dynamic e-commerce website from scratch, providing customers with a'
                        style={{ fontSize: textScale(16) }}
                    />
                </View>

                <View style={{
                    ...styles.boxView,
                    backgroundColor: isDark ? colors.blackOpacity20 : colors.blackOpacity40
                }}>
                    <TextComp
                        text='Dashboard'
                        style={{ fontSize: textScale(14) }}
                    />
                    <TextComp
                        text='1k account reached in the last 30 days'
                        style={{ fontSize: textScale(14), color: isDark ? colors.whiteOpacity70 : colors.blackOpacity70 }}
                    />

                </View>
            </View>
        )
    }

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => onPresPost(item)}
            >
                <FastImageComp
                    url={'https://cdn4.vectorstock.com/i/1000x1000/00/28/black-background-with-cartoon-eyes-and-crooked-vector-10940028.jpg'}
                    imageStyle={{
                        ...styles.imgStyle,
                        borderColor: isDark ? colors.white : colors.black,
                    }}
                />

            </TouchableOpacity>
        )
    }
    return (
        <WrapperContainer>

            <View style={{ flex: 1, padding: moderateScale(16) }}>

                <FlashList
                    data={[{}, {}, {}, {}, {}, {}, {}, {}, {},]}
                    numColumns={3}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={listHeader}
                    ListEmptyComponent={() => <Text>No posts found</Text>}
                    keyExtractor={(item, index) => item?._id || String(index)}
                />

            </View>

        </WrapperContainer>
    );
};

// define your styles
const styles = StyleSheet.create({
    boxView: {
        padding: moderateScale(12),
        borderRadius: moderateScale(8)

    },
    imgStyle: {
        width: width / 3,
        height: width / 3,
        borderWidth: 0.5,
    }
});

//make this component available to the app
export default Profile;