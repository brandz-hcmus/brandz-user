import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Homepage } from '../screens/Homepage';
import NotificationPage from '../screens/NotificationPage';
import {FontAwesome} from '@expo/vector-icons'
import ProductListPage from './ProductList';
import ProductDetailPage from './ProductDetailPage';
import ProductEvaluate from '../components/ProductEvaluate'

const Tab=createBottomTabNavigator();

const TabScreens = () => {
    return (
        <Tab.Navigator
            initialRouteName="ProductDetail"
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
                name="ProductDetail"
                component={ProductEvaluate}
                options={{
                    tabBarLabel:'Product Detail',
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
