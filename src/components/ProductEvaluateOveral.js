import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import StaticImages from '../share/static/images'

const ProductEvaluateOveral = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.evaluateText}>Đánh giá (100)</Text>
            <View style={styles.starWrapper}>
                <Text style={styles.startCount}>5.0</Text>
                {[1,2,3,4,5].map((item,index)=>(
                    <Image style={styles.starIcon} source={StaticImages.star} key={index} />
                ))}
            </View>
        </View>
    )
}

export default ProductEvaluateOveral

const styles = StyleSheet.create({
    wrapper:{
        backgroundColor:'#fff',
        borderRadius:'8px',
        display: 'flex',
        flexDirection:'column',
        padding:'8px'
    },
    evaluateText:{
        fontStyle:'normal',
        fontWeight:'bold',
        fontSize:'1rem',
        lineHeight:'20px',
        color: '#000',
        marginBottom:'8px'
    },
    starWrapper:{
        backgroundColor:'#f4f4f4',
        borderRadius:'8px',
        margin: '8px',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        padding: '1rem',
        marginBottom:'1rem'
    },
    startCount:{
        fontStyle:'normal',
        fontWeight:'bold',
        fontSize:'24px',
        lineHeight:'20px',
        color: '#000',
        marginRight:'8px'
    },
    starIcon:{
        width:'20px',
        height:'20px',
        marginHorizontal:'4px'
    }
})
