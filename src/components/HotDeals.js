import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ProductData } from '../share/utils/constants'
import Label from './Label'
import ProductCard from './ProductCard'

const HotDeals = () => {
    return (
        <View style={styles.wrapper}>
            <Label title={'HOT DEALS'} />
            <View style={styles.listWrapper}>
                {ProductData.map((item)=>(
                    <ProductCard srcImg={item.srcImg} title={item.title} price={item.price} salePrice={item.salePrice} key={item.id}  />
                ))}
            </View>
        </View>
    )
}

export default HotDeals

const styles = StyleSheet.create({
    wrapper:{
        display:'flex',
        flexDirection:'column',
        backgroundColor:'#fff',
        marginBottom:'1rem'
    },
    listWrapper:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        padding:'16px',
    }
})
