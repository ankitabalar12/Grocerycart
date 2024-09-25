import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { icons } from '../../Helper/icons';
import Home from '../../Screen/Home/Home';

import Like from '../../Screen/Like/Like';
import { useTheme } from '../ThemeContext';
import Offer from '../../Screen/Offer/Offer';



const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
    const { theme, themeStyles } = useTheme();
    return (

        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                // tabBarInactiveTintColor: '#022689',
                tabBarActiveTintColor: '#fff',
                tabBarLabelStyle: {
                    // marginBottom: 15,
                    // fontSize: 10,
                    // fontWeight: '800'
                },
                tabBarStyle: {
                    backgroundColor: themeStyles[theme].backgroundColor,
                    borderBottomWidth: 0,
                    alignItems: 'center',
                    position: 'absolute',
                    borderColor: '#DFDFDF',
                    borderWidth: 0.5,
                    height: 70,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    justifyContent:"center",
                    //   borderRadius: 33, 
                    // marginHorizontal: '1%'
                },
            }} initialRouteName="Home">

            <Tab.Screen
                name="Offer"

                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => (

                        <Image
                            source={icons.setimg}
                            style={{
                                tintColor: focused ? '#f39643' : '#a1a3a6',
                                height: 30,
                                width: 30,
                                alignSelf: 'center',
                            }}
                        />

                    ),
                }}
                component={Offer}
            />
            <Tab.Screen
                name="Home"
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => (

                        <Image
                            source={icons.grayhome}
                            style={{
                                tintColor: focused ? '#f39643' : '#a1a3a6',
                                height: 30,
                                width: 30,

                                alignSelf: 'center',
                            }}
                        />

                    ),
                }}
                component={Home} />

            <Tab.Screen
                name="Like"
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.heartline}
                            style={{
                                tintColor: focused ? '#f39643' : '#a1a3a6',
                                height: 30,
                                width: 30,
                                alignSelf: 'center',
                            }}
                        />

                    ),
                }}
                component={Like}
            />


        </Tab.Navigator>

    );
}

export default BottomTabNavigation