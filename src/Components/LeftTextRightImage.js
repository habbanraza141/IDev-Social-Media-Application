//import liraries
import React, { Component } from 'react';
import { Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import fontFamily from '../styles/fontFamily';
import colors from '../styles/colors';
import { moderateScale , textScale, moderateScaleVertical} from '../styles/responsiveSize';
import imagePath from '../constants/imagePath';

// create a component
const LeftTextRightImage = ({
    onPress = () => { },
    isSelected,
    text = '',
    image = isSelected ? imagePath.icRadio2 : imagePath.icRadio
}) => {
    return (
        <TouchableOpacity 
        activeOpacity={0.7}
        onPress={onPress} style={styles.horizontalView} >
            <Text style={{
                ...styles.langTextStyle,
                color: isSelected ? colors.redColor : colors.black
            }} >{text}</Text>
            <Image style={{height: moderateScale(25), width: moderateScale(25),tintColor: isSelected ? colors.redColor : colors.gray2 }}
               source={image}  />
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    langTextStyle: {
        fontFamily: fontFamily.semiBold,
        fontSize: textScale(14),
        color: colors.black,
        textTransform: 'capitalize',
        marginVertical: moderateScaleVertical(8)
    },

    horizontalView: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
    }
});

//make this component available to the app
export default LeftTextRightImage;
