//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import colors from '../styles/colors';
import { useSelector } from 'react-redux';

// create a component
const WrapperContainer = ({
    style = {},
    children
}) => {
    const isDarkTheme = useSelector(state=>state?.appSettings?.isDark )
    // const isDarkTheme = false
    return (
        <View style={{ ...styles.container, ...style, backgroundColor: isDarkTheme? colors.themeColor: colors.white }}>
            <SafeAreaView style={{flex: 1}} >
                {children}
            </SafeAreaView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.themeColor,
    },
});

//make this component available to the app
export default WrapperContainer;
