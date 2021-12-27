import React from 'react'
import {  StyleSheet, Text, View } from 'react-native'
import PageHeader from '../components/PageHeader'
import ProductDetail from '../components/ProductDetail'
import ProductDetailTab from '../components/ProductDetailTab'
import ProductEvaluate from '../components/ProductEvaluate'

const ProductDetailPage = () => {
    return (
        <View style={styles.wrapper}>
            <PageHeader title='CHI TIẾT SẢN PHẨM' />
            {/* <ProductDetailTab /> */}
            <ProductDetail /> 
            {/* <ProductEvaluate /> */}
        </View>
    )
}

export default ProductDetailPage

const styles = StyleSheet.create({
    wrapper:{
        flex:1
    },
    
})
