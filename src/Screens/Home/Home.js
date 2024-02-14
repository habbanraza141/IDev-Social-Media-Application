//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import navigationStrings from '../../Navigation/navigationStrings';


// create a component
const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text onPress={()=>navigation.navigate(navigationStrings.PROFILE)}>Home</Text>
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
export default Home;
