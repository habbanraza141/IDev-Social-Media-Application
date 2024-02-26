import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from 'react-redux';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

const Stack = createNativeStackNavigator();

export default function Routes() {
    const userData = useSelector(state=>state.auth.userData)
    console.log("userData", userData)
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* {!!userData?.isLogin? MainStack(Stack): AuthStack(Stack)} */}
                {true? MainStack(Stack): AuthStack(Stack)}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
