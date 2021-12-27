import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const CategoryCard = ({ srcImg, categoryName }) => {
  return (
    <View style={styles.cardWrapper}>
      <Image style={styles.imgWrapper} source={srcImg} />
      <Text style={styles.text}>{categoryName}</Text>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  cardWrapper: {
    width: 72,
    height: 72,
    borderRadius: 8,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 8,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: '#000',
  },
  imgWrapper: {
    width: 68,
    height: 48,
    borderRadius: 8,
  },
  text: {
    fontSize: 12,
    fontWeight: '500',
    marginTop:2
  },
});
