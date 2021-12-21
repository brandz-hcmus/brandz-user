import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import StaticImages from '../share/static/images'

const Banner = () => {
    return (
        <View >
            <Image source={StaticImages.banner} style={styles.bannerWrapper}></Image>
        </View>
    )
}

export default Banner

const styles = StyleSheet.create({
    bannerWrapper:{
        width: '100%',
        height: '375px',
    }
})
