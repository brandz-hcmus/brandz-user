import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { categoryData } from '../share/utils/constants';
import CategoryCard from './CategoryCard';

const CategoryList = () => {
    return (
        <View style={styles.categoryWrapper}>
            <View style={styles.categoryLabelWrapper}>
                <Text style={styles.label}>DANH MỤC NỔI BẬT</Text>
                <FontAwesome5 name="list-ul" size={18} color="red" />
            </View>
            <View style={styles.categoryListWrapper}>
                {categoryData.map((item)=>(
                    <CategoryCard srcImg={item.srcImg} categoryName={item.categoryName} key={item.id} />
                ))}
            </View>
        </View>
    )
}

export default CategoryList

const styles = StyleSheet.create({
    categoryWrapper:{
        width: '100%',
        borderRadius:'8px',
        backgroundColor:'#fff',
        display: 'flex',
        flexDirection:'column',
        marginTop:'1rem'
    },
    categoryLabelWrapper:{
        display: 'flex',
        flexDirection:'row',
        paddingTop:'0.5rem',
        paddingLeft:'8px'
    },
    label:{
        textTransform:'capitalize',
        fontWeight:'bold',
        color: 'rgba(255, 68, 68, 1)',
        fontStyle:'normal',
        fontSize:'12px',
        lineHeight:'20px',
        textAlign:'center',
        marginRight:'8px'
    },
    categoryListWrapper:{
        display: 'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:'1rem',
        marginBottom:'1rem',
        paddingLeft:'1rem',
        paddingRight:'1rem'
    }
})
