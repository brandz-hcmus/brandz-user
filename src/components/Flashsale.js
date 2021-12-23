import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FlashsaleTitle from './FlashsaleTitle'

const Flashsale = () => {
    return (
        <View style={styles.wrapper}>
            <FlashsaleTitle></FlashsaleTitle>
        </View>
    )
}

export default Flashsale

const styles = StyleSheet.create({
    wrapper:{
        display:'flex',
        flexDirection:'column',
        backgroundColor:'#fff',
        borderRadius:'8px'
    }
})
