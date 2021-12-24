import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons';

const ProductDetailInfoLayout = (Component)=>(props)=> {
    console.log(props)
    return (
        <View style={styles.wrapper}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>{props.title}</Text>
                <View style={styles.divider}></View>
            </View>
            <Component {...props} />
            <View style={styles.seeMoreCTA}>
                <Text style={styles.seeMoreText}>Xem thêm</Text>
                <Entypo name="chevron-down" size={24} color="black" />
            </View>
        </View>
    )
}

export default ProductDetailInfoLayout

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor:'#fff',
        borderRadius:'8px',
        padding:'1rem',
        shadowOffset:{
            width: 4,
            height: 4
        },
        shadowRadius:5,
        shadowOpacity:0.2,
        marginBottom:'1rem'
    },
    titleWrapper:{
        marginBottom:'8px'
    },
    title:{
        fontStyle:'normal',
        fontWeight:'bold',
        fontSize:'1rem',
        lineHeight:'20px',
        color:'#000',
        marginBottom:'4px'
    },
    divider:{
        width: '100%',
        borderWidth:'1px',
        borderStyle:'solid',
        borderColor:'#000'
    },
    seeMoreCTA:{
        borderRadius:'8px',
        borderWidth:'1px',
        borderStyle:'solid',
        borderColor:'#000',
        display: 'flex',
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:'auto',
        justifyContent:'center',
        padding:'8px',
        marginTop:'8px'
    },
    seeMoreText:{
        fontStyle:'normal',
        fontWeight:'normal',
        fontSize:'12px',
        lineHeight:'20px',
        color:'#000',
    }
})
