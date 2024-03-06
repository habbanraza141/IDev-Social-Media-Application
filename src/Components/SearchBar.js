//import liraries
import React from 'react';
import { View, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import { moderateScale, moderateScaleVertical, textScale } from '../styles/responsiveSize';
import fontFamily from '../styles/fontFamily';
import colors from '../styles/colors';
import { useSelector } from 'react-redux';

// create a component
const SearchBar = ({
    value = '',
    onChangeText,
    placeholder = '',
    isSearch = false,
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
                textAlign: lang == 'ar'? 'right': 'left'
            }}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}

            {...props}
            />
            {!!isSearch? <ActivityIndicator color={colors.redColor} />:null}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    inputStyle: {
     height:moderateScale(52),
     borderRadius:moderateScale(8),
     flexDirection:'row',
     justifyContent:'space-between',
     paddingHorizontal:moderateScale(16),
     alignItems:'center',
     backgroundColor: colors.gray2,
     marginBottom:moderateScaleVertical(16)
    },
    textStyle:{
        fontSize:textScale(14),
        fontFamily:fontFamily.regular,
        flex:1,
        color: colors.white
    }
});

//make this component available to the app
export default SearchBar;
