import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Countdown = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.squareBox}>00</View>
            <Text style={styles.semicolon}>:</Text>
            <View style={styles.squareBox}>00</View>
            <Text style={styles.semicolon}>:</Text>
            <View style={styles.squareBox}>00</View>
        </View>
    )
}

export default Countdown

const styles = StyleSheet.create({
    wrapper:{
        display:'flex',
        flexDirection:'row',
    },
    squareBox:{
        width:'30px',
        height:'26px',
        borderRadius:'4px',
        backgroundColor:'#b31310',
        fontStyle:'normal',
        fontWeight:'bold',
        textAlign:'center',
        fontSize:'1rem',
        lineHeight:'22px',
        letterSpacing:'0.15px',
        color:'#fff',
    },
    semicolon:{
        fontStyle:'normal',
        fontWeight:'bold',
        fontSize:'1rem',
        fontWeight:'bold',
        letterSpacing:'0.15px',
        color:'rgba(178, 19, 16, 1)',
        marginHorizontal:'4px'
    }
})
