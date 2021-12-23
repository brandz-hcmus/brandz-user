import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlashsaleData } from '../share/utils/constants'
import FlashsaleCard from './FlashsaleCard'
import FlashsaleTitle from './FlashsaleTitle'

const Flashsale = () => {
    return (
        <View style={styles.wrapper}>
            <FlashsaleTitle></FlashsaleTitle>
            <View style={styles.flashsaleListWrapper}>
                {
                    FlashsaleData.map((item)=>(
                        <FlashsaleCard srcImg={item.srcImg} title={item.title} price={item.price} salePrice={item.salePrice} key={item.id} />
                    ))
                }
            </View>
        </View>
    )
}

export default Flashsale

const styles = StyleSheet.create({
    wrapper:{
        display:'flex',
        flexDirection:'column',
        backgroundColor:'#fff',
        borderRadius:'8px',
        marginBottom:'1rem'
    },
    flashsaleListWrapper:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        padding:'16px',
    }
})
