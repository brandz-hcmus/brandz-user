import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Homepage } from '../screens/Homepage';
import NotificationPage from '../screens/NotificationPage';
import {Entypo} from '@expo/vector-icons'
import {Icon} from 'react-native-elements'

const Tab=createBottomTabNavigator();

const BottomMenu = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor:'#e91e63',
            }}
        >
            <Tab.Screen 
                name="Home"
                component={Homepage}
                options={{
                    tabBarLabel:'Home',
                    tabBarIcon:({tintColor,size})=>{
                        <Icon name="home" color={'#e6e6e6'} size={size} />
                    }
                }}
            />
            <Tab.Screen 
                name="Notification"
                component={NotificationPage}
                options={{
                    tabBarLabel:'Notification',
                    tabBarIcon:({color,size})=>{
                        <Icon name="bell" color={color} size={size}></Icon>
                    },
                    tabBarBadge:3,
                }}
            />

        </Tab.Navigator>
    )
}

export default BottomMenu

const styles = StyleSheet.create({})