import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { categoryData } from '../share/utils/constants';
import CategoryCard from './CategoryCard';
import { ScreenSizes } from '../share/utils/sizes';

const CategoryList = () => {
  return (
    <View style={styles.categoryWrapper}>
      <View style={styles.categoryLabelWrapper}>
        <Text style={styles.label}>DANH MỤC NỔI BẬT</Text>
        <FontAwesome5 name="list-ul" size={18} color="red" />
      </View>
      <View style={styles.categoryListWrapper}>
        {categoryData.map((item) => (
          <CategoryCard
            srcImg={item.srcImg}
            categoryName={item.categoryName}
            key={item.id}
          />
        ))}
      </View>
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  categoryWrapper: {
    width: ScreenSizes.vw,
    borderRadius: 8,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 16,
  },
  categoryLabelWrapper: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 8,
    paddingLeft: 16,
  },
  label: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    color: 'rgba(255, 68, 68, 1)',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    marginRight: 8,
  },
  categoryListWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 16,
    paddingLeft: 8,
    paddingRight: 8,
  },
});
