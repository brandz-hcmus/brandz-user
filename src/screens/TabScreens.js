import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Homepage } from '../screens/Homepage';
import NotificationPage from '../screens/NotificationPage';
import {FontAwesome} from '@expo/vector-icons'
import ProductList from './ProductList';

const Tab=createBottomTabNavigator();

const TabScreens = () => {
    return (
        <Tab.Navigator
            initialRouteName="Products"
            screenOptions={{
                tabBarActiveTintColor: '#2f95dc',
              }}
        >
            <Tab.Screen 
                name="Home"
                component={Homepage}
                options={{
                    tabBarLabel:'Home',
                    tabBarIcon:({color})=>{
                        <FontAwesome name="home" color={color} />
                    }
                }}
            />
            <Tab.Screen 
                name="Products"
                component={ProductList}
                options={{
                    tabBarLabel:'Products',
                    tabBarIcon:({color})=>{
                        <FontAwesome name="home" color={color} />
                    }
                }}
            />
            <Tab.Screen 
                name="Notification"
                component={NotificationPage}
                options={{
                    tabBarLabel:'Notification',
                    tabBarIcon:({color})=>{
                        <FontAwesome name="bell" color={color}></FontAwesome>
                    },
                    tabBarBadge:3,
                }}
            />

        </Tab.Navigator>
    )
}

export default TabScreens

const styles = StyleSheet.create({})
