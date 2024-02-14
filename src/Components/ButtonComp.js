//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import { moderateScale, textScale } from '../styles/responsiveSize';
import { useSelector } from 'react-redux';

// create a component
const ButtonComp = ({
    onPress = () => { },
    text,
    textStyle,
    style = {},
    leftImg
}

) => {

    return (
        <TouchableOpacity
            style={{ ...styles.container, ...style}}
            activeOpacity={0.7}
            onPress={onPress}>

            {!!leftImg? <Image style={{height: moderateScale(25), width: moderateScale(25)}} source={leftImg} />: <View /> }
            <Text style={{...styles.textStyle,...textStyle}} >{text}</Text>
            <View />

        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.redColor,
        height: moderateScale(52),
        borderRadius: moderateScale(8),
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: moderateScale(16)
    },

    textStyle: {
        fontFamily: fontFamily.semiBold,
        fontSize: textScale(16),
        color: colors.white,
    },

  
});

//make this component available to the app
export default ButtonComp;
