import React from 'react'
import { StyleSheet, View,Image, TouchableOpacity,Text } from 'react-native'
import StaticImages from '../share/static/images'

const FlashsaleCard = () => {
    return (
        <View style={styles.cardWrapper}>
            <Image style={styles.imgWrapper} source={StaticImages.product1} />
            <View style={styles.infoWrapper}>
                
            </View>
            <TouchableOpacity style={styles.addToCardCTA}>
                <Text style={styles.addToCardText}>Thêm vào giỏ hàng</Text>
            </TouchableOpacity>
        </View>
    )
}

export default FlashsaleCard

const styles = StyleSheet.create({
    cardWrapper:{
        width: '96px',
        height: '176px',
        borderRadius:'8px',
        backgroundColor:'#c4c4c4',
        display: 'flex',
        flexDirection:'column',
    },
    imgWrapper:{
        width: '100%',
        height: '6rem',
        borderRadius:'8px',
    },
    infoWrapper:{
        display:'flex',
        flexDirection:'column',
    },
    addToCardCTA:{
        height: '1.5rem',
        width: '100%',
        borderRadius:'8px',
        backgroundColor:'#fc1717',
        marginHorizontal:'auto'
    },
    addToCardText:{
        
    }
})
