import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ProductEvaluateOveral from './ProductEvaluateOveral'

const ProductEvaluate = () => {
    return (
        <View style={styles.wrapper}>
            <ProductEvaluateOveral />
        </View> 
    )
}

export default ProductEvaluate

const styles = StyleSheet.create({
    wrapper:{
        flex:1
    }
})
