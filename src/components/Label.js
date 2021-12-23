import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ScreenName } from '../share/configs/routers';

const Label = ({title}) => {
    const navigation=useNavigation();
    const _navigateToProductsPage=()=>{
        navigation.navigate(ScreenName.PRODUCTS_SCREEN)
    }
    return (
        <>
            <View style={styles.labelWrapper}>
                <Text style={styles.label}>{title}</Text>
                <TouchableOpacity style={styles.seeMore} onPress={_navigateToProductsPage}>
                    <Text style={styles.seeMoreText}>Xem thêm</Text>
                    <Ionicons name="ios-chevron-forward-outline" size={20} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.divider}></View>
        
        </>
    )
}

export default Label

const styles = StyleSheet.create({
    labelWrapper:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:'1rem',
        paddingRight:'1rem',
        paddingTop:'12px',
        paddingBottom:'4px'
    },
    label:{
        fontStyle:'normal',
        fontWeight:'bold',
        fontSize:'16px',
        lineHeight:'20px',
        textAlign:'center',
        color:'#ff4444'
    },
    seeMore:{
        display:'flex',
        flexDirection:'row',
    },
    seeMoreText:{
        fontStyle:'normal',
        fontWeight:'normal',
        fontSize:'12px',
        lineHeight:'20px',
        textAlign:'center',
        textDecorationLine:'underline',
        color:'#000'
    },
    divider:{
        width: '90%',
        border:'0.5px solid #000',
        marginHorizontal:'auto'
    }
})
