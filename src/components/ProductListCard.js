import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import StaticImages from '../share/static/images'
import { FormatVND } from '../share/utils/formatter'
import { Feather,MaterialCommunityIcons  } from '@expo/vector-icons';

const ProductListCard = ({srcImg,title,price,salePrice,BULogoSrcImg,BUName}) => {
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
                <View style={styles.BUInfoWrapper}>
                    <View style={styles.BUInfo}>
                        <Image style={styles.BULogo} source={BULogoSrcImg}></Image>
                        <Text style={styles.BUName}>{BUName}</Text>
                    </View>
                    <View style={styles.BUIcon}>
                        <Feather style={styles.CTAIcon} name="heart" size={20} color="black" />
                        <MaterialCommunityIcons style={styles.CTAIcon} name="cart-plus" size={20} color="black" />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ProductListCard

const styles = StyleSheet.create({
    cardWrapper:{
        display:'flex',
        flexDirection:'column',
        width: '11.25rem',
        backgroundColor:'#c4c4c4',
        borderRadius:'8px'
    },
    imgWrapper:{
        width: '100%',
        height: '190px',
        borderRadius:'8px'
    },
    infoWrapper:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        backgroundColor:'#fff',
        padding: '4px',
        borderRadius:'8px'

    },
    productTitle:{
        fontStyle:'normal',
        fontWeight:'bold',
        fontSize:'14px',
        color:'000'
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
        fontSize:'12px',
        color:'#ff4444',
        lineHeight:'20px'
    },
    price:{
        fontStyle:'normal',
        fontWeight:'normal',
        fontSize:'12px',
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
        fontSize:'10px',
        lineHeight:'20px',
        color:'#000',
        marginRight:'2px'
    },
    evaluateNum:{
        fontStyle:'normal',
        fontWeight:'normal',
        fontSize:'10px',
        lineHeight:'20px',
        color:'#929292'
    },
    BUInfoWrapper:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#fff',
        justifyContent:'space-between',
        marginBottom:'2px',
    },
    BUInfo:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    BUIcon:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    BULogo:{
        width: '24px',
        height: '24px',
        borderRadius:'50%'
    },
    BUName:{
        fontStyle:'normal',
        fontWeight:'600',
        fontSize:'10px',
        lineHeight:'20px',
        color: '#000',
        marginLeft:'4px'
    },
    CTAIcon:{
        marginHorizontal:'4px'
    }
})
