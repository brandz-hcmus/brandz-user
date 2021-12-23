import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Filter from '../components/Filter'
import PageHeader from '../components/PageHeader'

const ProductList = () => {
    return (
        <View style={styles.container}>
            <PageHeader title="ĐỀ XUẤT CHO BẠN" />
            <Filter />
        </View>
    )
}

export default ProductList

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
