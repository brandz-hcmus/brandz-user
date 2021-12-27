import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import StaticImages from '../share/static/images';

const ProductEvaluateOveral = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.evaluateText}>Đánh giá (100)</Text>
      <View style={styles.starWrapper}>
        <Text style={styles.startCount}>5.0</Text>
        {[1, 2, 3, 4, 5].map((item, index) => (
          <Image
            style={styles.starIcon}
            source={StaticImages.star}
            key={index}
          />
        ))}
      </View>
    </View>
  );
};

export default ProductEvaluateOveral;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'column',
    padding: 8,
    marginBottom:8
  },
  evaluateText: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 20,
    color: '#000',
    marginBottom: 8,
  },
  starWrapper: {
    backgroundColor: '#f4f4f4',
    borderRadius: 8,
    margin: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 16,
  },
  startCount: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 24,
    color: '#000',
    marginRight: 8,
  },
  starIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 4,
  },
});
