import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import StaticImages from '../share/static/images'
import Countdown from './Countdown'

const FlashsaleTitle = () => {
    return (
        <>
            <View style={styles.wrapper}>
                <View style={styles.flashsaleTitleWrapper}>
                    <Text style={styles.title}>FLASH SALE</Text>
                    <Image style={styles.imgWrapper} source={StaticImages.flashsale_title} ></Image>
                </View>
                <Countdown />
            </View>
            <View style={styles.divider}></View>
        </>
    )
}

export default FlashsaleTitle

const styles = StyleSheet.create({
    wrapper:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    flashsaleTitleWrapper:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginLeft:'16px'
    },
    title:{
        fontStyle:'normal',
        fontWeight:'bold',
        fontSize:'18px',
        textAlign:'center',
        color:'#ff4444'
    },
    imgWrapper:{
        height: '64px',
        width: '64px',
        marginLeft:'4px'
    },
    divider:{
        width: '90%',
        // border:'0.5px solid #000',
        borderWidth:'0.5px',
        borderStyle:'solid',
        borderColor:'#000',
        marginHorizontal:'auto'
    },
   
})
