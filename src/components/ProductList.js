import React from 'react'
import { StyleSheet, Text, View,FlatList } from 'react-native'
import { ProductListData } from '../share/utils/constants';
import ProductListCard from './ProductListCard';

const ProductList = () => {
    const renderItem = ({ item }) => (
        <ProductListCard srcImg={item.srcImg} title={item.title} price={item.price} salePrice={item.salePrice} BULogoSrcImg={item.BULogoSrcImg} BUName={item.BUName} />
      );
    return (
        <View style={styles.listWrapper}>
            <FlatList 
                data={ProductListData}
                renderItem={renderItem}
                keyExtractor={item=>item.id}
            />
        </View>
    )
}

export default ProductList

const styles = StyleSheet.create({
    listWrapper:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        padding:'4px',
    }
})
