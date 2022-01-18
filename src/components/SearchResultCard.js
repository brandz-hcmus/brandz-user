import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import StaticImages from '../share/static/images'
import { ProductData } from '../share/utils/constants'
import { ScreenSizes } from '../share/utils/sizes'
import { colors } from '../styles/color'
import { FormatVND } from '../share/utils/formatter'
import { useNavigation } from '@react-navigation/native'
import { ScreenName } from '../share/configs/routers'


const SearchResultCard = ({item}) => {
    const navigation=useNavigation();
    const {id,srcImg,title,salePrice,price,BULogoSrcImg}=item;
    const _navigateProductDetail=()=>{
        console.log('press ne');
        navigation.navigate(ScreenName.PRODUCT_DETAIL_SCREEN, {
            srcImg,
            title,
            salePrice,
            price,
            id,
          });
    }
    
    return (
        <TouchableOpacity style={styles.wrapper} onPress={_navigateProductDetail}>
            <Image source={srcImg} style={styles.image}></Image>
            <View style={styles.infoWrapper}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.salePrice}>{FormatVND(salePrice)} đ</Text>
                <Text style={styles.price}>{FormatVND(price)} đ</Text>
                <Image source={BULogoSrcImg} style={styles.logoBU}></Image>
            </View>
        </TouchableOpacity>
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
        fontWeight:"600",
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
        borderRadius:16,
        marginTop:4,
        marginBottom:4
    }
})
