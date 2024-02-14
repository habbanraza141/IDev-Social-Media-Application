import React from 'react';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import colors from '../styles/colors';
import { Image, StyleSheet } from 'react-native';
import * as Screens  from '../Screens';
import navigationStrings from './navigationStrings';
import imagePath from '../constants/imagePath';

const BottomTab = createBottomTabNavigator();

const TabRoutes = (props) => {
    return (
        <BottomTab.Navigator
            tabBar={(tabsProps) => (
                <>
                    <BottomTabBar {...tabsProps} />
                </>
            )}
            initialRouteName={navigationStrings.HOME}
            screenOptions={{
                headerShown: false,
                tabBarStyle: {backgroundColor: colors.themeColor},
                tabBarActiveTintColor: colors.redColor,
                tabBarInactiveTintColor: 'gray',
                tabBarShowLabel: false
            }}>
            <BottomTab.Screen
                name={navigationStrings.HOME}
                component={Screens.Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (

                                <Image style={{tintColor: focused? colors.redColor: colors.white, height: 30, width: 30, resizeMode: 'contain'}}  source={imagePath.firstActiveIcon} />
                        );
                    },
                }}
            />
            <BottomTab.Screen
                name={navigationStrings.SEARCH}
                component={Screens.Search}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                          
                                <Image style={{tintColor: focused? colors.redColor: colors.white, height: 30, width: 30, resizeMode: 'contain'}}   source={imagePath.secondActiveIcon} />
                        );
                    },
                }}
            />
            <BottomTab.Screen
                name={navigationStrings.CREATEPOST}
                component={Screens.CreatePost}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                                <Image style={{tintColor: focused? colors.redColor: colors.white, height: 30, width: 30, resizeMode: 'contain'}}   source={imagePath.thirdActiveIcon} />
                        );
                    },
                }}
            />
            <BottomTab.Screen
                name={navigationStrings.NOTIFICATION}
                component={Screens.Notification}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                                <Image style={{tintColor: focused? colors.redColor: colors.white, height: 30, width: 30, resizeMode: 'contain'}}   source={imagePath.fourthActiveIcon} />
                        );
                    },
                }}
            />
            <BottomTab.Screen
                name={navigationStrings.PROFILE}
                component={Screens.Profile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                                <Image style={{tintColor: focused? colors.redColor: colors.white, height: 30, width: 30, resizeMode: 'contain'}}   source={imagePath.fifthActiveIcon} />
                        );
                    },
                }}
                screenOptions={{
                }}
            />

        </BottomTab.Navigator>
    );
};

const styles = StyleSheet.create({
    customBottomtabsStyle: {
        //height: moderateScale(60)
    },

});

export default TabRoutes