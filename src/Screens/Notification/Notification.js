//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Notification = () => {
    return (
        <View style={styles.container}>
            <Text  style={{fontFamily: 'Barlow-Italic', fontSize: 16}}>My Component</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default Notification;
