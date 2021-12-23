import React from 'react'
import { StyleSheet, Text, View,FlatList,ScrollView } from 'react-native'
import { ProductListData } from '../share/utils/constants';
import ProductListCard from './ProductListCard';

const ProductList = () => {
    return (
        <View style={styles.listWrapper}>
                {
                    ProductListData.map((item)=>(
                        <ProductListCard srcImg={item.srcImg} title={item.title} price={item.price} salePrice={item.salePrice} BULogoSrcImg={item.BULogoSrcImg} BUName={item.BUName} key={item.id} />
                    ))
                }
        </View>
    )
}

export default ProductList

const styles = StyleSheet.create({
    listWrapper:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop:'8px'
    }
})
