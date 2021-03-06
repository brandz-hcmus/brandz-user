import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import StaticImages from '../share/static/images'
import { ScreenSizes } from '../share/utils/sizes'

const Banner = () => {
    return (
        <View>
            <Image source={StaticImages.banner} style={styles.bannerWrapper}></Image>
        </View>
    )
}

export default Banner

const styles = StyleSheet.create({
    bannerWrapper:{
        width: ScreenSizes.vw,
        height: 375,
    }
})
