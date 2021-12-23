import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Entypo, Feather } from '@expo/vector-icons';

const Filter = () => {
    return (
        <View style={styles.wrapper}> 
            <View style={styles.criteria}>
                <Text style={styles.criteriaTitle}>Sắp xếp</Text>
                <Entypo style={styles.icon} name="chevron-small-down" size={20} color="black" />
            </View>
            <View style={styles.criteria}>
                <Text style={styles.criteriaTitle}>Thể loại</Text>
                <Entypo style={styles.icon} name="chevron-small-down" size={20} color="black" />
            </View>
            <View style={styles.criteria}>
                <Text style={styles.criteriaTitle}>Phong cách</Text>
                <Entypo style={styles.icon} name="chevron-small-down" size={20} color="black" />
            </View>
            <View style={styles.criteria}>
                <Text style={styles.criteriaTitle}>Nhãn hàng</Text>
                <Entypo style={styles.icon} name="chevron-small-down" size={20} color="black" />
            </View>
            <View style={styles.criteria}>
                <Text style={styles.criteriaTitle}>Lọc</Text>
                <Feather style={styles.icon} name="filter" size={20} color="black" />
            </View>
        </View>
    )
}

export default Filter

const styles = StyleSheet.create({
    wrapper:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#fff',
        height: '32px',
        justifyContent:'space-evenly'
    },
    criteria:{
        display: 'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    criteriaTitle:{
        fontStyle:'normal',
        fontWeight:'600',
        fontSize:'12px',
        textAlign:'center',
        color: '#000'
    },
    icon:{
        marginTop:'4px',
    }
})
