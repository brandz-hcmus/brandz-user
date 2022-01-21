import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NumberToVND } from '../../../share/utils/formatter';
import { colors } from '../../../styles/color';

export function Calc({ ship, totalPrice }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
        Thông tin thanh toán
      </Text>
      <View>
        <Text style={styles.smallText}>
          Phí vận chuyển:{' '}
          <Text style={[styles.smallText, { color: colors.blueCyan }]}>
            {NumberToVND(ship)}
          </Text>
        </Text>
        <Text style={styles.smallText}>
          Tiền hàng:{' '}
          <Text style={[styles.smallText, { color: colors.blueCyan }]}>
            {NumberToVND(totalPrice)}
          </Text>
        </Text>
        <Text style={styles.smallText}>
          Tổng cộng:{' '}
          <Text style={[styles.smallText, { color: colors.red }]}>
            {NumberToVND(ship + totalPrice)}
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginTop: 5,
    paddingLeft: 10,
    paddingVertical: 10,
  },
  smallText: {
    fontSize: 14,
  },
});
