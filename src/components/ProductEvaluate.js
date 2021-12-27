import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import CartCTA from './CartCTA'
import ProductEvaluateDetail from './ProductEvaluateDetail'
import ProductEvaluateOveral from './ProductEvaluateOveral'

const ProductEvaluate = () => {
    return (
        <View style={styles.wrapper}>
            <ScrollView style={styles.listWrapper}>
                <ProductEvaluateOveral />
                {[1,2,3,4,5].map((item,index)=>(
                    <ProductEvaluateDetail key={index} />
                ))}
            </ScrollView>
            {/* <CartCTA /> */}
        </View> 
    )
}

export default ProductEvaluate

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
    },
    listWrapper:{
        padding:8,
        marginBottom:38
    }
})
