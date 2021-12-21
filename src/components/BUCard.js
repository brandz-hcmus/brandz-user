import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import StaticImages from '../share/static/images'

const BUCard = ({srcImg}) => {
    return (
        <View>
            <Image source={srcImg} style={styles.cardWrapper}></Image>
        </View>
    )
}

export default BUCard

const styles = StyleSheet.create({
    cardWrapper:{
        width: '144px',
        height: '144px',
        borderRadius:'8px',
        marginTop:'1rem',
        marginBottom:'1rem',
        marginHorizontal:'12px'
    }
})
