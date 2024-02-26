import React from "react"
import navigationStrings from "./navigationStrings";
import * as Screens  from '../Screens';

export default function (Stack) {
    return (
        <>

            <Stack.Screen
                name={navigationStrings.INITIALSCREEN}
                component={Screens.InitialScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name={navigationStrings.LOGIN}
                component={Screens.Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={navigationStrings.SIGNUP}
                component={Screens.Signup}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={navigationStrings.OTP_VERIFICATION}
                component={Screens.OtpVerification}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={navigationStrings.WEB_VIEW}
                component={Screens.Webview}
                options={{ headerShown: false }}
            />

        </>
    );
}
