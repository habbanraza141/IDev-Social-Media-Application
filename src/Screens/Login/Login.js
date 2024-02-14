//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize';
import strings from '../../constants/lang';
import TextInputComp from '../../Components/TextInputComp';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import ButtonComp from '../../Components/ButtonComp';
import HeaderComp from '../../Components/HeaderComp';
import TextComp from '../../Components/TextComp';

// create a component
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [secureText, setSecureText] = useState(true)
    return (
        <WrapperContainer>
            <HeaderComp />
            <View style={{ flex: 1, padding: moderateScale(16) }} >
                <View style={{flex: 0.8}} >
                    <TextComp style={styles.headerStyle} text={strings.WELCOME_BACK} > </TextComp>
                    <TextComp style={styles.descStyle} text={strings.WE_ARE_HAPPY_TO_SEE} > </TextComp>

                    <TextInputComp
                        value={email}
                        onChangeText={(value) => setEmail(value)}
                        placeholder={strings.EMAIL}
                    />

                    <TextInputComp
                        value={password}
                        onChangeText={(value) => setPassword(value)}
                        placeholder={strings.PASSWORD}
                        secureTextEntry={secureText}
                        secureText={secureText ? strings.SHOW : strings.HIDE}
                        onPressSecure={() => setSecureText(!secureText)} />

                    <Text style={{
                        ...styles.descStyle,
                        alignSelf: 'flex-end',
                        color: colors.blueColor,
                        fontFamily: fontFamily.semiBold
                    }} >{strings.FORGOT_PASSWORD}?</Text>

                </View>
                <View style={{flex: 0.2, justifyContent: 'flex-end'}} >
                    <ButtonComp
                        text={strings.LOGIN} />
                </View>
            </View>
        </WrapperContainer>
    );
};

// define your styles
const styles = StyleSheet.create({
    headerStyle: {
        fontSize: textScale(24),
        color: colors.white,
        fontFamily: fontFamily.medium

    },
    descStyle: {
        fontSize: textScale(12),
        fontFamily: fontFamily.regular,
        color: colors.white,
        marginTop: moderateScaleVertical(8),
        marginBottom: moderateScaleVertical(52),
    }
});

//make this component available to the app
export default Login;
