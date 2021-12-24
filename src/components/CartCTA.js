import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const CartCTA = () => {
    return (
        <View style={styles.wrapper}>
            <Ionicons style={styles.icon} name="ios-heart-outline" size={32} color="black" />
            <View style={styles.addToCartCTA}>
                <View style={styles.addToCart}>
                    <Text style={styles.addToCartText}>THÊM VÀO GIỎ HÀNG</Text>
                </View>
                <View style={styles.buyNow}>
                    <Text style={styles.buyNowText}>MUA NGAY</Text>
                </View>
            </View>
        </View>
    )
}

export default CartCTA

const styles = StyleSheet.create({
    wrapper:{
        display:'flex',
        width: '100%',
        flexDirection:'row',
        alignItems:'center',
        padding:'4px',
        position: 'absolute',
        bottom: 0,
        backgroundColor:'#fff',
        justifyContent:'space-between'
    },
    icon:{
        marginLeft:'8px'
    },
    addToCartCTA:{
        display: 'flex',
        flexDirection:'row',
        alignItems:'center',
    },
    addToCart:{
        borderRadius:'8px',
        borderWidth:'1px',
        borderStyle:'solid',
        borderColor:'#000',
        padding:'12px',
        marginRight:'8px'
    },
    addToCartText:{
        fontStyle:'normal',
        fontWeight:'600',
        fontSize:'14px',
        lineHeight:'20px',
        color:'#000'
    },
    buyNow:{
        borderRadius:'8px',
        backgroundColor:'#000',
        padding:'12px'
    },
    buyNowText:{
        fontStyle:'normal',
        fontWeight:'bold',
        fontSize:'16px',
        lineHeight:'20px',
        color:'#fff'
    }
})
