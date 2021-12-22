import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import StaticImages from '../share/static/images'
import { BUData } from '../share/utils/constants'
import BUCard from './BUCard'
import Label from './Label'

const BUList = () => {
    return (
        <View style={styles.wrapper}>
            <Label title={'BU NỔI BẬT'}></Label>
            <View style={styles.listWrapper}>
                {BUData.map((item)=>(
                    <BUCard srcImg={item.srcImg} key={item.id} />
                ))}
            </View>
        </View>
    )
}

export default BUList

const styles = StyleSheet.create({
    wrapper:{
        width: '100%',
        borderRadius:'8px',
        backgroundColor:'#fff',
        display: 'flex',
        flexDirection:'column',
        marginTop:'1rem',
        marginBottom:'1rem'
    },
    listWrapper:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        width: '100%',
        paddingLeft:'1rem',
        paddingRight:'1rem',
        
    },
    imgWrapper:{
        width: '144px',
        height:'144px',
        borderRadius:'8px'
    }
})
