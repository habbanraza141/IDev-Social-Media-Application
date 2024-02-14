import React from "react"
import navigationStrings from "./navigationStrings";
import * as Screens  from '../Screens';
import TabRoutes from "./TabRoutes";

export default function (Stack) {
    return (
        <>

            <Stack.Screen
                name={navigationStrings.TABROUTES}
                component={TabRoutes}
                options={{ headerShown: false }}
            />


        </>
    );
}
