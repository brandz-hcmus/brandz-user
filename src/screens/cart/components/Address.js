import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../../styles/color';
import Location from './icons/location.svg';
import Narrow from './icons/narrow-left.svg';
export function Address() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.header}>Địa chỉ giao hàng</Text>
          <Location width={13} height={15}></Location>
        </View>

        <View style={styles.voucherItemContainer}>
          <Narrow width={13} height={13} />
        </View>
      </View>

      <Text>
        Nguyễn Văn A, SĐT: 094543222 227 Đ. Nguyễn Văn Cừ, Phường 4, Quận 5,
        Thành phố Hồ Chí Minh
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 10,
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
  voucherItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
