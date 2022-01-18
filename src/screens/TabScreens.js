import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Homepage } from '../screens/Homepage';
import {FontAwesome} from '@expo/vector-icons'
import ProductListPage from './ProductList';
import ProductDetailPage from './ProductDetailPage';
import ProductEvaluate from '../components/ProductEvaluate'
import SearchPage from './SearchPage';

const Tab=createBottomTabNavigator();

const TabScreens = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: '#000',
              }}
        >
            <Tab.Screen 
                name="Home"
                component={Homepage}
                options={{
                    tabBarLabel:'Home',
                    tabBarIcon:({color,size})=>(
                        <FontAwesome name="home" color={color} size={size} />
                    ),
                    headerShown:false,
                }}
            />
            <Tab.Screen 
                name="ProductList"
                component={ProductListPage}
                options={{
                    tabBarLabel:'Product List',
                    tabBarIcon:({color,size})=>(
                        <FontAwesome name="list" color={color} size={size} />
                    ),
                    headerShown:false
                }}
            />
            <Tab.Screen 
                name="Search"
                component={SearchPage}
                options={{
                    tabBarLabel:'Search',
                    tabBarIcon:({color,size})=>(
                        <FontAwesome name="search" size={size} color={color}></FontAwesome>
                    ),
                    headerShown:false,
                }}
            />
            <Tab.Screen 
                name="Profile"
                component={SearchPage}
                options={{
                    tabBarLabel:'Profile',
                    tabBarIcon:({color,size})=>(
                        <FontAwesome name="user-circle" size={size} color={color}></FontAwesome>
                    ),
                    headerShown:false,
                }}
            />

        </Tab.Navigator>
    )
}

export default TabScreens

const styles = StyleSheet.create({})
