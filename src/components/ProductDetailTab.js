import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Tab,TabView} from 'react-native-elements'
import ProductDetail from './ProductDetail'
import ProductEvaluate from './ProductEvaluate'



const ProductDetailTab = () => {
    const [index,setIndex]=useState(0);
    return (
        <>
            <Tab
                value={index}
                onChange={(e)=>setIndex(e)}
                variant="default"
            >
                <Tab.Item
                    title="Thông tin chi tiết"
                    titleStyle={{fontSize:12}}
                />
                <Tab.Item
                    title="Đánh giá"
                    titleStyle={{fontSize:12}}
                />
            </Tab>
            <TabView value={index} onChange={setIndex} animationType="spring">
                <TabView.Item>
                    <ProductDetail />
                </TabView.Item>
                <TabView.Item>
                    <ProductEvaluate />
                </TabView.Item>
            </TabView>
        </>
    )
}

export default ProductDetailTab

const styles = StyleSheet.create({
    wrapper:{
        backgroundColor:'#fff',
        marginBottom:4
    },
    tabWrapper:{
        flex:1
    }
})
