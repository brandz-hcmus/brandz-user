import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PageHeader from '../components/PageHeader'

const ProductList = () => {
    return (
        <View style={styles.container}>
            <PageHeader />
        </View>
    )
}

export default ProductList

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
