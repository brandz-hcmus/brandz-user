import React from 'react'
import { StyleSheet, View,Image, TouchableOpacity,Text } from 'react-native'
import StaticImages from '../share/static/images'
import { FormatVND } from '../share/utils/formatter'

const ProductCard = ({srcImg,title,salePrice,price}) => {
    return (
        <View style={styles.cardWrapper}>
            <Image style={styles.imgWrapper} source={srcImg} />
            <View style={styles.infoWrapper}>
                <Text style={styles.productTitle}>{title}</Text>
                <View style={styles.priceWrapper}>
                    <Text style={styles.salePrice}>{FormatVND(salePrice)}</Text>
                    <Text style={styles.price}>{FormatVND(price)}</Text>
                    <View></View>
                </View>
                <View style={styles.evaluateWrapper}>
                    <Image style={styles.starIcon} source={StaticImages.star}></Image>
                    <Text style={styles.starNum}>4.9</Text>
                    <Text style={styles.evaluateNum}>(100 đánh giá)</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.addToCardCTA}>
                <Text style={styles.addToCardText}>Thêm vào giỏ hàng</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    cardWrapper:{
        width: '6rem',
        height: '11rem',
        borderRadius:'8px',
        backgroundColor:'#c4c4c4',
        display: 'flex',
        flexDirection:'column',
        marginBottom:'1.5rem',
        marginHorizontal:'8px',
        marginTop:'8px',
        shadowOffset:{
            width: 4,
            height: 4
        },
        shadowRadius:5,
        shadowOpacity:0.1
    },
    imgWrapper:{
        width: '100%',
        height: '6rem',
        borderRadius:'8px',
    },
    infoWrapper:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        backgroundColor:'#fff',
        padding: '4px',

    },
    addToCardCTA:{
        height: '1.2rem',
        width: '100%',
        borderRadius:'8px',
        backgroundColor:'#fc1717',
        marginHorizontal:'auto'
    },
    addToCardText:{
        fontStyle:'normal',
        fontWeight:'500',
        fontSize:'10px',
        lineHeight:'20px',
        color:'#fff',
        textAlign:'center',
    },
    productTitle:{
        fontStyle:'normal',
        fontWeight:'500',
        fontSize:'12px',
        color:'000',
        height: '2rem',
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
        fontSize:'10px',
        color:'#ff4444',
        lineHeight:'20px'
    },
    price:{
        fontStyle:'normal',
        fontWeight:'normal',
        fontSize:'10px',
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
        fontSize:'8px',
        lineHeight:'20px',
        color:'#000',
        marginRight:'2px'
    },
    evaluateNum:{
        fontStyle:'normal',
        fontWeight:'normal',
        fontSize:'6px',
        lineHeight:'20px',
        color:'#929292'
    },
})