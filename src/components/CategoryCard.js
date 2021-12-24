import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const CategoryCard = ({srcImg,categoryName}) => {
    return (
        <View style={styles.cardWrapper}>
            <Image style={styles.imgWrapper} source={srcImg} />
            <Text style={styles.text}>{categoryName}</Text>
        </View>
    )
}

export default CategoryCard

const styles = StyleSheet.create({
    cardWrapper:{
        width: '4.25rem',
        height: '4.25rem',
        borderRadius:'8px',
        backgroundColor:'#fff',
        display: 'flex',
        flexDirection:'column',
        alignItems:'center',
        margin: '8px',
        // border:'0.5px solid #000',
        borderWidth:'0.5px',
        borderStyle:'solid',
        borderColor:'#000',
    },
    imgWrapper:{
        width: '100%',
        height: '3rem',
        borderRadius:'8px'
    },
    text:{
        fontSize:'12px',
        fontWeight:'500'
    }
})
