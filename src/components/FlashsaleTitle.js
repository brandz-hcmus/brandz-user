import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import StaticImages from '../share/static/images'
import { ScreenSizes } from '../share/utils/sizes'
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
        marginLeft:16
    },
    title:{
        fontStyle:'normal',
        fontWeight:'bold',
        fontSize:18,
        textAlign:'center',
        color:'#ff4444'
    },
    imgWrapper:{
        height: 64,
        width: 64,
        marginLeft:4
    },
    divider:{
        width: ScreenSizes.vw*0.9,
        borderWidth:0.5,
        borderStyle:'solid',
        borderColor:'#000',
        marginLeft:16
    },
   
})
