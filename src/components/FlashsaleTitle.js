import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import StaticImages from '../share/static/images'
import Countdown from './Countdown'

const FlashsaleTitle = () => {
    return (
        <>
            <View style={styles.wrapper}>
                <Image style={styles.imgWrapper} source={StaticImages.flashsale_title} ></Image>
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
    imgWrapper:{
        height: '64px',
        width: '64px',
        marginLeft:'8px'
    },
    divider:{
        width: '90%',
        border:'0.5px solid #000',
        marginHorizontal:'auto'
    },
   
})
