import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import Filter from '../components/Filter'
import PageHeader from '../components/PageHeader'
import ProductList from '../components/ProductList'

const ProductListPage = () => {
    return (
        <SafeAreaView style={styles.container}>
            <PageHeader title="ĐỀ XUẤT CHO BẠN" />
            <Filter />
            <ScrollView>
                <ProductList />
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProductListPage

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
