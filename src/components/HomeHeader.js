import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { AntDesign, Feather,Ionicons } from '@expo/vector-icons';

const HomeHeader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.searchWrapper}>
                <Feather style={styles.searchIcon} name="search" size={20} color="black" />
                <TextInput style={styles.inputWrapper} placeholder='Tìm kiếm...'></TextInput>
                <Feather style={styles.cameraIcon} name="camera" size={20} color="black" />
            </View>
            <Ionicons name="cart-outline" size={24} color="white" />
        </View>
    ) 
}

export default HomeHeader

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:'rgba(0,0,0,0.8)',
        height: 40 ,
        width: '100%',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    searchWrapper:{
        width: 310,
        height: 28,
        borderRadius:8,
        backgroundColor:'#fff',
    },
    searchIcon:{
        position: 'absolute',
        left: 8,
        fontWeight:'bold',
        top:1.5
    },
    inputWrapper:{
        paddingLeft:30,
        paddingTop:3,
        paddingBottom:3
    },
    cameraIcon:{
        position: 'absolute',
        fontWeight:'bold',
        top:1.5,
        left:264,
    }
})
