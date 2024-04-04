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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import navigationStrings from '../../Navigation/navigationStrings';
import validator from '../../utils/validations';
import { showError } from '../../utils/helperFunctions';
import { userSignup } from '../../redux/actions/auth';

// create a component
const Signup = ({ navigation }) => {
    const [userName, setUserName] = useState('')
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setLoading] = useState(false)
    const [secureText, setSecureText] = useState(true)

    const isValidData = () => {
        const error = validator({
            email,
            password,
            userName,
            fullName
        })
        if (error) {
            showError(error)
            return false
        }
        return true
    }

    const onPressSignup = async () => {

        const checkValid = isValidData()

        if (checkValid) {
            setLoading(true)

            let data = {
                userName: userName,
                fullName: fullName,
                email: email,
                password: password,
            }
        try {
            let res  = await userSignup(data)
            console.log("res", res);
            setLoading(false)
            navigation.navigate(navigationStrings.OTP_VERIFICATION, {data: res.data})

        } catch (error) {
            console.log("error raised", error);
            showError(error?.error || error?.message )
            setLoading(false)

        }

        }
    }
    return (
        <WrapperContainer>
            <HeaderComp />
            <KeyboardAwareScrollView>
                <View style={{ padding: moderateScale(16) }} >
                    <View  >
                        <TextComp style={styles.headerStyle} text={strings.CREATE_NEW_ACCOUNT} > </TextComp>
                        <TextComp style={styles.descStyle} text={strings.CREATE_AN_ACCOUNT_SO_YOU_CAN_CONTINUE} > </TextComp>

                        <TextInputComp
                            value={userName}
                            placeholder={strings.USERNAME}
                            onChangeText={(value) => setUserName(value)}
                        />
                        <TextInputComp
                            value={fullName}
                            placeholder={strings.FULL_NAME}
                            onChangeText={(value) => setFullName(value)}
                        />

                        <TextInputComp
                            value={email}
                            placeholder={strings.EMAIL}
                            onChangeText={(value) => setEmail(value)}
                        />

                        <TextInputComp
                            value={password}
                            placeholder={strings.PASSWORD}
                            onChangeText={(value) => setPassword(value)}
                            secureTextEntry={secureText}
                            secureText={secureText ? strings.SHOW : strings.HIDE}
                            onPressSecure={() => setSecureText(!secureText)}
                        />



                    </View>
                    <ButtonComp
                        onPress={onPressSignup}
                        style={{ marginVertical: moderateScaleVertical(52) }}
                        text={strings.SIGN_UP}
                        isLoading={isLoading}
                       />
                </View>
            </KeyboardAwareScrollView>
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
