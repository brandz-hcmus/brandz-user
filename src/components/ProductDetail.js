import React from 'react'
import { StyleSheet, Text, View,Image, ScrollView } from 'react-native'
import StaticImages from '../share/static/images'
import { FormatVND } from '../share/utils/formatter'
import Label from './Label'
import { ProductData } from '../share/utils/constants'
import ProductCard from './ProductCard'
import BUInfo from './BUInfo'


const ProductDetail = () => {
    return (
        <View style={styles.wrapper}>
            <ScrollView>
            <Image source={StaticImages.product1} style={styles.imgWrapper} />
            <View style={styles.infoWrapper}>
                <Text style={styles.productTitle}>Áo hoodie ấm áp</Text>
                <View style={styles.priceWrapper}>
                    <Text style={styles.salePrice}>{FormatVND(69000)}</Text>
                    <Text style={styles.price}>{FormatVND(174000)}</Text>
                    <View></View>
                </View>
                <View style={styles.evaluateWrapper}>
                    <Image style={styles.starIcon} source={StaticImages.star}></Image>
                    <Text style={styles.starNum}>4.9</Text>
                    <Text style={styles.evaluateNum}>(100 đánh giá)</Text>
                </View>
            </View>
            <View style={styles.relatedProducts}>
                <Label title={'Sản phẩm tương tự'} />
                <View style={styles.listWrapper}>
                    {ProductData.slice(0,3).map((item)=>(
                        <ProductCard srcImg={item.srcImg} title={item.title} price={item.price} salePrice={item.salePrice} key={item.id}  />
                    ))}
                </View>
            </View>
            <BUInfo />
            </ScrollView>
        </View>
    )
}

export default ProductDetail

const styles = StyleSheet.create({
    wrapper:{
        flex:1
    },
    imgWrapper:{
        width: '100%',
        height: '496px',
        marginVertical:'8px'
    },
    infoWrapper:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        backgroundColor:'#fff',
        paddingLeft: '16px',
        paddingTop:'8px',
        borderRadius:'8px',
        marginBottom:'1rem',
        shadowOffset:{
            width: 4,
            height: 4
        },
        shadowRadius:5,
        shadowOpacity:0.2
    },
    productTitle:{
        fontStyle:'normal',
        fontWeight:'bold',
        fontSize:'16px',
        color:'#000'
    },
    priceWrapper:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        lineHeight:'20px'
    },
    salePrice:{
        fontStyle:'normal',
        fontSize:'500',
        fontWeight:'500',
        fontSize:'14px',
        color:'#ff4444',
        lineHeight:'20px'
    },
    price:{
        fontStyle:'normal',
        fontWeight:'normal',
        fontSize:'14px',
        color:'#929292',
        textDecorationLine:'line-through'
    },
    evaluateWrapper:{
        display: 'flex',
        flexDirection:'row',
        alignItems:'center',
        marginBottom:'6px'
    },
    starIcon:{
        width: '8px',
        height: '8px',
        borderRadius:'8px',
        marginRight:'4px'
    },
    starNum:{
        fontStyle:'normal',
        fontWeight:'normal',
        fontSize:'12px',
        lineHeight:'20px',
        color:'#000',
        marginRight:'2px'
    },
    evaluateNum:{
        fontStyle:'normal',
        fontWeight:'normal',
        fontSize:'12px',
        lineHeight:'20px',
        color:'#929292'
    },
    relatedProducts:{
        display:'flex',
        flexDirection:'column',
        backgroundColor:'#fff',
        marginBottom:'1rem',
        borderRadius:'8px',
        shadowOffset:{
            width: 4,
            height: 4
        },
        shadowRadius:5,
        shadowOpacity:0.2
    },
    listWrapper:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        padding:'16px',
    }
})
