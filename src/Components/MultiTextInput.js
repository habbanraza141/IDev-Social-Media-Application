//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { moderateScale, moderateScaleVertical, textScale } from '../styles/responsiveSize';
import fontFamily from '../styles/fontFamily';
import colors from '../styles/colors';
import { useSelector } from 'react-redux';

// create a component
const MultiTextInput = ({
    value = '',
    onChangeText,
    placeholder = '',
    secureText = false,
    onPressSecure = () => { },
    inputStyle = {},
    textStyle = {},
    placeholderTextColor = colors.whiteOpacity70,
    ...props
}) => {

    const { lang } = useSelector(state => state?.appSettings)

    return (
        <View style={{
            ...styles.inputStyle,
            ...inputStyle,

        }}>
            <TextInput
                style={{
                    ...styles.textStyle,
                    ...textStyle,
                    textAlign: lang == 'ar' ? 'right' : 'left'
                }}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}


                {...props}
            />
            {!!secureText ? <Text style={{ ...styles.textStyle, flex: 0 }} onPress={onPressSecure}>{secureText}</Text> : null}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    inputStyle: {
        minHeight: moderateScale(80),
        maxHeight: moderateScale(150),
        borderRadius: moderateScale(8),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(16),
        paddingVertical: moderateScaleVertical(8),
        backgroundColor: colors.gray2,
        marginBottom: moderateScaleVertical(16)
    },
    textStyle: {
        fontSize: textScale(14),
        fontFamily: fontFamily.regular,
        flex: 1,
        color: colors.whiteColor
    }
});

//make this component available to the app
export default MultiTextInput;
