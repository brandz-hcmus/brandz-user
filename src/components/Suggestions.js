import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ProductData } from '../share/utils/constants'
import Label from './Label'
import ProductCard from './ProductCard'

const Suggestions = () => {
    return (
        <View style={styles.wrapper}>
            <Label title={'ĐỀ XUẤT CHO BẠN'} />
            <View style={styles.listWrapper}>
                {ProductData.map((item)=>(
                    <ProductCard srcImg={item.srcImg} title={item.title} price={item.price} salePrice={item.salePrice} key={item.id}  />
                ))}
            </View>
        </View>
    )
}

export default Suggestions

const styles = StyleSheet.create({
    wrapper:{
        display:'flex',
        flexDirection:'column',
        backgroundColor:'#fff',
        marginBottom:16
    },
    listWrapper:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        padding:16,
        alignItems:'center',
        justifyContent:'center'
    }
})
