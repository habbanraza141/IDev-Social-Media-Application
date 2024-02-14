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
const Signup = () => {
    const [userName, setUserName] = useState('')
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [secureText, setSecureText] = useState(true)

    return (
        <WrapperContainer>
            <HeaderComp />
            <View style={{ flex: 1, padding: moderateScale(16) }} >
                <View style={{ flex: 0.8 }} >
                    <TextComp style={styles.headerStyle} text={strings.CREATE_NEW_ACCOUNT} > </TextComp>
                    <TextComp style={styles.descStyle} text={strings.CREATE_AN_ACCOUNT_SO_YOU_CAN_CONTINUE} > </TextComp>

                    <TextInputComp
                        value={userName}
                        placeholder={strings.USERNAME}
                        onChangeText={(value) => setUserName(value) }
                    />
                    <TextInputComp
                        value={fullName}
                        placeholder={strings.FULL_NAME}
                        onChangeText={(value) => setFullName(value) }
                    />

                    <TextInputComp
                        value={email}
                        placeholder={strings.EMAIL}
                        onChangeText={(value)=>setEmail(value)}
                    />

                    <TextInputComp
                        value={password}
                        placeholder={strings.PASSWORD}
                        onChangeText={(value)=>setPassword(value)}
                        secureTextEntry={secureText}
                        secureText={secureText ? strings.SHOW : strings.HIDE}
                        onPressSecure={() => setSecureText(!secureText)} 
                    />

                    <TextInputComp
                        value={confirmPassword}
                        placeholder={strings.CONFIRM_PASSWORD}
                        onChangeText={(value)=>setConfirmPassword(value)}
                        secureTextEntry={secureText}
                        secureText={secureText ? strings.SHOW : strings.HIDE}
                        onPressSecure={() => setSecureText(!secureText)} 
                    />



                </View>
                <View style={{ flex: 0.2, justifyContent: 'flex-end' }} >
                    <ButtonComp
                        text={strings.NEXT} />
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
export default Signup;
