import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Homepage } from '../screens/home';
import NotificationPage from '../screens/notification';
import {Entypo} from '@expo/vector-icons'

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
                    tabBarIcon:({color,size})=>{
                        <Entypo name="home" size={24} color="black" />
                    }
                }}
            />
            <Tab.Screen 
                name="Notification"
                component={NotificationPage}
                options={{
                    tabBarLabel:'Notification',
                    tabBarIcon:({color,size})=>{
                        <Icon name="bell" color={'black'} size={24}></Icon>
                    },
                    tabBarBadge:3,
                }}
            />

        </Tab.Navigator>
    )
}

export default BottomMenu

const styles = StyleSheet.create({})
