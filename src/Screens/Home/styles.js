import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import { moderateScale, textScale, moderateScaleVertical, height } from "../../styles/responsiveSize";
import fontFamily from "../../styles/fontFamily";

// define your styles
const styles = StyleSheet.create({
    boxStyle: {
        backgroundColor: colors.gray2,
        borderRadius: moderateScale(16),
        padding: moderateScale(12)
    },

    profileImage: {
        width: moderateScale(60),
        height: moderateScale(60),
        borderRadius: moderateScale(30),
        marginRight: moderateScale(8)
    },

    postImage: {
        width: '100%',
        height: height / 2.8,
        borderRadius: moderateScale(8),
        marginRight: moderateScale(16),
        marginVertical: moderateScaleVertical(16)
    },

    nameStyle: {
        fontSize: textScale(16),
        fontFamily: fontFamily.medium,
        color: colors.white,
    },

    bioStyle: {
        fontSize: textScale(12),
        fontFamily: fontFamily.medium,
        color: colors.whiteOpacity50,
        marginTop: moderateScaleVertical(4)
    },

    descStyle: {
        fontSize: textScale(14),
        fontFamily: fontFamily.regular,
    },

    flexHorizontal: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
    },

    notDataFound: {
        fontSize: textScale(24),
        fontFamily: fontFamily.regular,

    }
});

export default styles;