import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Filter from '../components/Filter'
import PageHeader from '../components/PageHeader'
import ProductList from '../components/ProductList'

const ProductListPage = () => {
    return (
        <View style={styles.container}>
            <PageHeader title="ĐỀ XUẤT CHO BẠN" />
            <Filter />
            <ScrollView>
                <ProductList />
            </ScrollView>
        </View>
    )
}

export default ProductListPage

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
