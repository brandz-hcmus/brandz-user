import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Wait from './icons/1.svg';
import Truck from './icons/Truck.svg';
import Star from './icons/Star.svg';
import { colors } from '../../../styles/color';

export function OrderCategory() {
  return (
    <View style={styles.categoryContainer}>
      <View style={styles.categoryItem}>
        <View style={styles.categoryIcon}>
          <Wait width={30} height={30} />
        </View>

        <Text>Cho lay hang</Text>
      </View>
      <View style={styles.categoryItem}>
        <View style={styles.categoryIcon}>
          <Truck width={30} height={30} />
        </View>
        <Text>Dang giao</Text>
      </View>
      <View style={styles.categoryItem}>
        <View style={styles.categoryIcon}>
          <Star width={30} height={30} />
        </View>
        <Text>Cho danh gia</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    backgroundColor: colors.backGround,
  },
  categoryContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: colors.white,
  },

  categoryItem: {
    justifyContent: 'center',
    alignItems: 'center',

    padding: 5,
    marginRight: 5,
  },
  categoryIcon: {
    backgroundColor: colors.backGround,
    padding: 10,
    borderRadius: 5,
  },
});
