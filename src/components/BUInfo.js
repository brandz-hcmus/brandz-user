import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import StaticImages from '../share/static/images'
import { AntDesign } from '@expo/vector-icons';

const BUInfo = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.BUInfoWrapper}>
                <Image style={styles.logoWrapper} source={StaticImages.hugu} />
                <View style={styles.infoWrapper}>
                    <Text style={styles.BUName}>hugu.official</Text>
                    <Text style={styles.BUStatistic}>678k theo dõi | 123 sản phẩm</Text>
                </View>
            </View>
            <View style={styles.followCTA}>
                <AntDesign name="addusergroup" size={24} color="black" />
                <Text style={styles.followText}>Theo dõi</Text>
            </View>
        </View>
    )
}

export default BUInfo

const styles = StyleSheet.create({
    wrapper:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        borderRadius:'8px',
        backgroundColor:'#fff',
        justifyContent:'space-between',
        padding:'8px',
        shadowOffset:{
            width: 4,
            height: 4
        },
        shadowRadius:5,
        shadowOpacity:0.2,
        marginBottom:'1rem'
    },
    BUInfoWrapper:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginLeft:'8px',
    },
    logoWrapper:{
        width: '56px',
        height: '56px',
        borderRadius:'50%'
    },
    infoWrapper:{
        display: 'flex',
        flexDirection:'column',
        marginLeft:'4px'
    },
    BUName:{
        fontStyle:'normal',
        fontWeight:'bold',
        fontSize:'16px',
        lineHeight:'20px',
        color:'#000'
    },
    BUStatistic:{
        fontStyle:'normal',
        fontWeight:'normal',
        fontSize:'14px',
        lineHeight:'20px',
        color:'#000'
    },
    followCTA:{
        borderRadius:'8px',
        borderWidth:'1px',
        borderStyle:'solid',
        borderColor:'#000',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginRight:'8px',
        padding:'4px'
    },
    followText:{
        fontStyle:'normal',
        fontWeight:'500',
        fontSize:'12px',
        lineHeight:'20px',
        color:'#000'
    }
})
