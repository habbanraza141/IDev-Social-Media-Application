//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import fontFamily from '../styles/fontFamily';
import colors from '../styles/colors';
import { useSelector } from 'react-redux';
import { textScale } from '../styles/responsiveSize';

// create a component
const TextComp = ({
    text = '',
    style = {},
    children,
    ...props
}) => {

    const isDarkTheme = useSelector(state=>state?.appSettings?.isDark )
    // const isDarkTheme = false
return (
        <Text
            style={{...styles.textStyle,...style, color: isDarkTheme ? colors.white: colors.black }}
            {...props}
        >{text} {children}</Text>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: fontFamily.regular,
        color: colors.white,
        fontSize: textScale(12),
    },
});


export default TextComp;