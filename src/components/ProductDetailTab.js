import React, { useState } from 'react'
import { StyleSheet, Text, View,useWindowDimensions } from 'react-native'
import { TabView,SceneMap } from 'react-native-tab-view'
import ProductDetail from './ProductDetail'
import ProductEvaluate from './ProductEvaluate'

const renderScene=SceneMap({
    first:ProductDetail,
    second:ProductEvaluate
})

const ProductDetailTab = () => {
    const layout=useWindowDimensions();

    const [index,setIndex]=useState(0);
    const [routes]=useState([
        {
            key:'first',title:'Thông tin sản phẩm'
        },
        {
            key:'second',title:'Đánh giá'
        },
    ])
    return (
            <TabView
                navigationState={{index,routes}}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{width:layout.width}}
                style={styles.wrapper}
            />
    )
}

export default ProductDetailTab

const styles = StyleSheet.create({
    wrapper:{
        backgroundColor:'#fff',
        marginBottom:'4px'
    }
})
