import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import StaticImages from '../share/static/images'
import { ProductData } from '../share/utils/constants'
import { ScreenSizes } from '../share/utils/sizes'
import { colors } from '../styles/color'
import { FormatVND } from '../share/utils/formatter'


const SearchResultCard = () => {
    const sampleProduct=ProductData[0];
    return (
        <View style={styles.wrapper}>
            <Image source={StaticImages.product1} style={styles.image}></Image>
            <View style={styles.infoWrapper}>
                <Text style={styles.title}>{sampleProduct.title}</Text>
                <Text style={styles.salePrice}>{FormatVND(sampleProduct.salePrice)} đ</Text>
                <Text style={styles.price}>{FormatVND(sampleProduct.price)} đ</Text>
                <Image source={StaticImages.hugu} style={styles.logoBU}></Image>
            </View>
        </View>
    )
}

export default SearchResultCard

const styles = StyleSheet.create({
    wrapper:{
        borderRadius:8,
        width: 0.92*ScreenSizes.vw,
        backgroundColor: colors.white,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginBottom:4,
    },
    image:{
        width: 104,
        height:'100%',
        borderRadius:8,
        marginRight:16
    },
    infoWrapper:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'flex-start'
    },
    title:{
        fontStyle:'normal',
        fontWeight:'bold',
        fontSize:16,
        lineHeight:20,
        color:colors.black,
        marginBottom:4,
        marginTop:4
    },
    salePrice:{
        fontStyle:'normal',
        fontWeight:600,
        fontSize:14,
        lineHeight:20,
        color:colors.red,
    },
    price:{
        fontStyle:'normal',
        fontWeight:'normal',
        fontSize:12,
        textDecorationLine:'line-through',
        color:'rgba(0,0,0,0.5)',
    },
    logoBU:{
        width: 32,
        height:32,
        borderRadius:'50%',
        marginTop:4,
        marginBottom:4
    }
})
