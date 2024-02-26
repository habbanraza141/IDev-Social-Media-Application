//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import colors from '../styles/colors';
import { useSelector } from 'react-redux';

// create a component
const WrapperContainer = ({
    style = {},
    children
}) => {
    const {selectedTheme} = useSelector(state=>state?.appSettings )
    return (
        <View style={{ ...styles.container, ...style, backgroundColor: selectedTheme == 'dark' ? colors.themeColor: colors.white }}>
            <StatusBar barStyle={selectedTheme == 'dark' ? 'light-content': 'dark-content' }></StatusBar>
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
