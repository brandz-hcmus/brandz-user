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
            {/* <Tab.Screen 
                name="ProductDetail"
                component={ProductDetailPage}
                options={{
                    tabBarLabel:'Product Detail',
                    tabBarIcon:({color})=>{
                        <FontAwesome name="home" color={color} />
                    }
                }}
            /> */}
            <Tab.Screen 
                name="Search"
                component={SearchPage}
                options={{
                    tabBarLabel:'Search',
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
