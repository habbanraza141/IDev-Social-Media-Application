//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { moderateScale } from '../styles/responsiveSize';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';


// create a component
const HeaderComp = ({
    onPressLeft,
}) => {
    const {selectedTheme} = useSelector(state=>state?.appSettings )
    const navigation = useNavigation()
    
    return (
        <View style={styles.container}>
            <TouchableOpacity
            onPress={!!onPressLeft? onPressLeft: () =>navigation.goBack() }>
                <Image 
                style={{...styles.headerStyle, tintColor: selectedTheme == 'dark'? colors.white: colors.black}}
                source={imagePath.icBack} />
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height: moderateScale(42),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: moderateScale(16)
    },

    headerStyle: {
        height: 25,
        width: 25,
    }
});

//make this component available to the app
export default HeaderComp;
