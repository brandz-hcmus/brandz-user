import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../../styles/color';
import Narrow from './icons/narrow.svg';
import Truck from './icons/truck.svg';
export function Transport() {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.voucherItemContainer}>
          <Text style={styles.header}>Phuong thuc van chuyen</Text>
          <Truck width={13} height={15}></Truck>
        </View>

        <TouchableOpacity style={styles.paymentContainer}>
          <View style={styles.voucherItemContainer}>
            <Narrow />
            <Narrow />
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.smallText}>Ship COD</Text>
        <Text style={styles.smallText}>Viettel Post</Text>
        <Text style={styles.smallText}>
          Phi:{' '}
          <Text style={[styles.smallText, { color: colors.blueCyan }]}>
            16.000 d
          </Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 5,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  smallText: {
    fontSize: 14,
  },
  voucherItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },
});
