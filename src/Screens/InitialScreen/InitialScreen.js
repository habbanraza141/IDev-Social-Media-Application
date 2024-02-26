//import liraries
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, I18nManager } from 'react-native';
import navigationStrings from '../../Navigation/navigationStrings';
import { saveUserData } from '../../redux/reducers/auth';
import store from '../../redux/store';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import fontFamily from '../../styles/fontFamily';
import colors from '../../styles/colors';
import strings from '../../constants/lang';
import { height, moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize';
import ButtonComp from '../../Components/ButtonComp';
import TextComp from '../../Components/TextComp';
import { useSelector } from 'react-redux';
import ModalComp from '../../Components/ModalComp';
import LeftTextRightImage from '../../Components/LeftTextRightImage';
import { langData } from '../../constants/langtheme/langData';
import { themeData } from '../../constants/langtheme/themeData';
import RNRestart from 'react-native-restart'; // Import package from node modules
import { changeAppTheme, changeLanguage } from '../../redux/actions/appSettings';
const { dispatch } = store;


// create a component
const InitialScreen = ({ navigation }) => {
    const [isVisible, setIsVisible] = useState(false)

    const {selectedTheme, lang} = useSelector(state => state?.appSettings)

    const onLogin = () => {
        dispatch(saveUserData({ isLogin: true }))
    }

    const privacyPolicy = (type = 1) => {
        if (type == 1) {
            navigation.navigate(navigationStrings.WEB_VIEW, {type})
        } else {
            navigation.navigate(navigationStrings.WEB_VIEW, {type})
        }
    }

    const onPressLang = (lan) => {
        setIsVisible(false)
        if (lan == 'ar' && lang !== lan  ) {
            changeLanguage(lan)
            setTimeout(()=>{
                I18nManager.forceRTL(true)
                RNRestart.restart();
            }, 400)
        } else if (lang !== lan ) {
            changeLanguage(lan)
            setTimeout(()=>{
                I18nManager.forceRTL(false)
                RNRestart.restart();
            }, 400)
        }
    }

    const onPressTheme = (theme) => {
        changeAppTheme(theme)
        setIsVisible(false)
    }

    return (
        <WrapperContainer>
            <View style={{ flex: 1, padding: moderateScale(16), alignItems: 'center' }}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => setIsVisible(true)}
                    style={{
                        ...styles.circularStyle,
                        backgroundColor: selectedTheme == 'dark' ? colors.white : colors.gray2
                    }} >
                    <Text
                        style={{
                            ...styles.textStyle,
                            color: selectedTheme == 'dark' ? colors.black : colors.white
                        }}  >{lang}</Text>
                </TouchableOpacity>
                <View style={{ flex: 0.3, justifyContent: 'center' }}>
                    <Image style={styles.logoStyle} source={imagePath.icLogo} />
                </View>

                <View style={{ flex: 0.7, justifyContent: 'flex-end' }}>
                    <TextComp style={{ marginVertical: moderateScaleVertical(42) }} text={strings.BY_CLICKING}>
                        <Text  style={{color: colors.blueColor}} onPress={() => privacyPolicy(1)} >{strings.TERMS}</Text>,
                        {strings.LEARN_HOW_WE} <Text  style={{color: colors.blueColor}} onPress={() => privacyPolicy(2)} >{strings.PRIVACY_POLICY} </Text>  </TextComp>

                    <ButtonComp
                        onPress={() => navigation.navigate(navigationStrings.LOGIN)}
                        text={strings.LOG_IN_WITH_PHONE_NUMBER} />
                    <TextComp style={{ marginVertical: moderateScaleVertical(16), alignSelf: 'center' }} text={strings.OR} ></TextComp>

                    <ButtonComp
                        style={{ backgroundColor: selectedTheme == 'dark'  ? colors.white : colors.gray4 }}
                        textStyle={{ color: colors.black }}
                        text={strings.LOG_IN_WITH_GOOGLE}
                        leftImg={imagePath.icGoogle} />

                    <ButtonComp
                        style={{ backgroundColor: selectedTheme == 'dark'  ? colors.white : colors.gray4, marginVertical: moderateScaleVertical(16) }}
                        textStyle={{ color: colors.black }}
                        text={strings.LOG_IN_WITH_FACEBOOK}
                        leftImg={imagePath.icFacebook} />

                    <ButtonComp
                        style={{ backgroundColor: selectedTheme == 'dark'  ? colors.white : colors.gray4 }}
                        textStyle={{ color: colors.black }}
                        text={strings.LOG_IN_WITH_APPLE}
                        leftImg={imagePath.icApple} />

                    <TextComp style={{ fontFamily: fontFamily.medium, marginVertical: moderateScaleVertical(16), alignSelf: 'center' }} text={strings.NEW_HERE} >
                        <Text onPress={() => navigation.navigate(navigationStrings.SIGNUP)} style={{ color: colors.blueColor, fontFamily: fontFamily.semiBold }}> {strings.SIGN_UP} </Text> </TextComp>
                </View>

                <ModalComp
                    isVisible={isVisible}
                    style={{ justifyContent: 'flex-end', margin: 0 }}
                    onBackdropPress={() => setIsVisible(false)} >

                    <View style={{
                        backgroundColor: colors.white,
                        minHeight: moderateScale(height / 4),
                        borderTopLeftRadius: moderateScale(8),
                        borderTopRightRadius: moderateScale(8),
                        padding: moderateScale(16)
                    }} >

                        <Text style={styles.headingStyle} >{strings.CHOOSE_LANGUAGE} </Text>

                        {
                            langData.map((val, i) =>{
                                return(
                                    <LeftTextRightImage 
                                    key={String(i)}
                                    text={val.title}
                                    isSelected={lang == val.code}
                                    onPress={()=>onPressLang(val.code) } />
                                )
                            } )
                        }


                        <Text style={{...styles.headingStyle, marginTop:moderateScaleVertical(16) }} >{strings.CHOOSE_THEME} </Text>


                        {
                            themeData.map((val, i) =>{
                                return(
                                    <LeftTextRightImage 
                                    key={String(i)}
                                    text={val.title}
                                    isSelected={val.code == selectedTheme}
                                    onPress={()=>onPressTheme(val.code) } />
                                )
                            } )
                        }


                    </View>
                </ModalComp>

            </View>
        </WrapperContainer>
    );
};

const styles = StyleSheet.create({
    logoStyle: {
        width: moderateScale(150),
        height: moderateScale(150),
        borderRadius: moderateScale(150 / 2)
    },

    textStyle: {
        fontFamily: fontFamily.semiBold,
        textAlign: 'center',
        fontSize: textScale(14),
        color: colors.white,
        textTransform: 'capitalize'
    },

    circularStyle: {
        height: moderateScale(40),
        width: moderateScale(40),
        borderRadius: moderateScale(20),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end'
    },

    headingStyle: {
        fontFamily: fontFamily.semiBold,
        fontSize: textScale(16),
        color: colors.black,
        textTransform: 'capitalize',
        marginBottom: moderateScaleVertical(12)
    },


})

//make this component available to the app
export default InitialScreen;
