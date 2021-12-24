import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../styles/color';
import Payment from './icons/payment.svg';
import Narrow from './icons/narrow.svg';
import { ScreenName } from '../../../share/configs/routers';
export function PaymentDetail() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(ScreenName.PAYMENT_METHOD_SCREEN)}
      style={styles.container}
    >
      <View style={styles.headerContainer}>
        <View style={styles.voucherItemContainer}>
          <Text style={styles.header}>Phuong thuc thanh toan</Text>
          <Payment width={13} height={15}></Payment>
        </View>

        <TouchableOpacity style={styles.paymentContainer}>
          <View style={styles.voucherItemContainer}>
            <Narrow />
            <Narrow />
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.smallText}>
          Tien hang:{' '}
          <Text style={[styles.smallText, { color: colors.blueCyan }]}>
            16.000 d
          </Text>
        </Text>
        <Text style={styles.smallText}>
          Phi van chuyen:{' '}
          <Text style={[styles.smallText, { color: colors.blueCyan }]}>
            16.000 d
          </Text>
        </Text>
        <Text style={styles.smallText}>
          Tong thanh toan:{' '}
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
