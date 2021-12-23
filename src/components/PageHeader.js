import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Entypo,Feather,Ionicons } from '@expo/vector-icons';

const PageHeader = ({title}) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.titleWrapper}>
                <Entypo name="chevron-left" size={24} color="white" />
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.iconWrapper}>
                <Feather style={styles.icon} name="search" size={24} color="white" />
                <Ionicons style={styles.icon} name="cart-outline" size={24} color="white" />
                <View style={styles.cartCount}>
                    <Text style={styles.cartCountText}>2</Text>
                </View>
            </View>
        </View>
    )
}

export default PageHeader

const styles = StyleSheet.create({
    wrapper:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:'rgba(0,0,0,0.8)',
        height: '3rem',
        width: '100%',
        justifyContent:'space-between',
        alignItems:'center'
    },
    titleWrapper:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginLeft:'4px'
    },
    iconWrapper:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginRight:'4px'
    },
    title:{
         fontStyle:'normal',
         fontWeight:'bold',
         fontSize:'1rem',
         lineHeight:'20px',
         textAlign:'center',
         color:'#fff'
    },
    icon:{
        marginHorizontal:'4px'
    },
    cartCount:{
        width: '12px',
        height: '12px',
        borderRadius:'50%',
        backgroundColor:'#ff4444',
        position: 'absolute',
        right: 0,
        top:0
    },
    cartCountText:{
        fontStyle:'normal',
        fontWeight:'normal',
        fontSize:'8px',
        textAlign:'center',
        color:'#fff'
    }
})
