import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ProductEvaluateDetail from './ProductEvaluateDetail'
import ProductEvaluateOveral from './ProductEvaluateOveral'

const ProductEvaluate = () => {
    return (
        <View style={styles.wrapper}>
            <ProductEvaluateOveral />
            <ProductEvaluateDetail />
            
        </View> 
    )
}

export default ProductEvaluate

const styles = StyleSheet.create({
    wrapper:{
        flex:1
    }
})
