//import liraries
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Keyboard, Platform, TouchableWithoutFeedback } from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize';
import strings from '../../constants/lang';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import ButtonComp from '../../Components/ButtonComp';
import HeaderComp from '../../Components/HeaderComp';
import TextComp from '../../Components/TextComp';
import OTPTextView from 'react-native-otp-textinput';
import validator from '../../utils/validations';
import { showError } from '../../utils/helperFunctions';
import { otpVerify, userLogin } from '../../redux/actions/auth';
import store from '../../redux/store';
import { saveUserData } from '../../redux/reducers/auth';
const {dispatch} = store

// create a component
const OtpVerification = ({ navigation, route }) => {

    const [timer, setTimer] = useState(60);
    const [isLoading, setLoading] = useState(false)
    const { data } = route?.params || {}


    useEffect(() => {
        const timeout = setTimeout(() => {
            if (timer > 0) setTimer(timer - 1)
        }, 1000);
        return () => {
            if (timeout) {
                clearTimeout(timeout)
            }
        }
    }, [timer])

    const [otpInput, setOtpInput] = useState("");

    const input = useRef(null)

    const handleCellTextChange = async (text, i) => {

    };

    const onResendCode = () => {
        setTimer(59)
    }

    const isValidData = () => {
        const error = validator({
            otp: otpInput
        })
        if (error) {
            showError(error)
            return false
        }
        return true
    }

    const onDone = async () => {

        const checkValid = isValidData()
        if (checkValid) {
            setLoading(true)
            let apiData = {
                email: data.email,
                otp: otpInput
            }
            try {
                const res = await otpVerify(apiData, data.token )
                setLoading(false)
            } catch (error) {
                console.log("error in login api", error);
                showError(error?.error)
                setLoading(false)
            }
        }
    }

    return (
        <WrapperContainer>
            <HeaderComp />

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1, margin: moderateScale(16) }} >

                <TouchableWithoutFeedback
                    onPress={Keyboard.dismiss}>

                    <View style={{ flex: 1 }} >

                        <View style={{ flex: 0.8 }} >
                            <TextComp style={styles.headerStyle} text={strings.ENTER_THE_FOUR_DIGIT + `xyz@gmail.com`} > </TextComp>
                            <Text style={{
                                ...styles.descStyle,
                                alignSelf: 'flex-start',
                                color: colors.blueColor,
                                fontFamily: fontFamily.semiBold
                            }} onPress={() => navigation.goBack()} > {strings.EDIT_MY_EMAIL} </Text>

                            <OTPTextView
                                ref={input}
                                textInputStyle={styles.textInputContainer}
                                handleTextChange={setOtpInput}
                                handleCellTextChange={handleCellTextChange}
                                inputCount={4}
                                keyboardType="numeric"
                                autoFocus
                                tintColor={colors.whiteColor}
                                offTintColor={colors.whiteOpacity50}
                            />

                        </View>

                        <View style={{ flex: 0.2, justifyContent: 'flex-end', marginBottom: moderateScaleVertical(16) }} >
                            {timer > 0 ?
                                <TextComp style={{
                                    ...styles.descStyle,
                                    marginBottom: 12
                                }} text={strings.RESEND_CODE + ' in:'} >

                                    <Text>{timer}</Text>

                                </TextComp>
                                :
                                <TextComp onPress={onResendCode} style={styles.resendCodeStyle} text={strings.RESEND_CODE} />
                            }
                            <ButtonComp
                                text={strings.DONE}
                                onPress={onDone} 
                                isLoading={isLoading}/>
                        </View>

                    </View>

                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
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
        fontSize: textScale(14),
        fontFamily: fontFamily.regular,
        color: colors.blueColor,
        marginTop: moderateScaleVertical(8),
        marginBottom: moderateScaleVertical(52),
    },
    textInputContainer: {
        backgroundColor: colors.gray2,
        borderBottomWidth: 0,
        borderRadius: 8,
        color: colors.white
    },

    resendCodeStyle: {
        fontSize: textScale(14),
        fontFamily: fontFamily.regular,
        marginTop: moderateScaleVertical(8),
        marginBottom: moderateScaleVertical(16)
    }
});

//make this component available to the app
export default OtpVerification;
