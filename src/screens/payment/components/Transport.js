import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScreenName } from '../../../share/configs/routers';
import { colors } from '../../../styles/color';
import Narrow from './icons/narrow-left.svg';
import Truck from './icons/truck.svg';
export function Transport({ id, price }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(ScreenName.TRANSPORT_METHOD_SCREEN, {
          id: id,
          price: price,
        })
      }
      style={styles.container}
    >
      <View style={styles.headerContainer}>
        <View style={styles.voucherItemContainer}>
          <Text style={styles.header}>Phương thức vân chuyển</Text>
          <Truck width={13} height={15}></Truck>
        </View>

        <View style={styles.paymentContainer}>
          <View style={styles.voucherItemContainer}>
            <Narrow width={13} height={13} />
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.smallText}>Ship COD</Text>
        {id === 2 ? (
          <Text style={styles.smallText}>Giao hàng tiết kiệm</Text>
        ) : (
          <>
            {id === 0 ? (
              <Text style={styles.smallText}>Grab Express</Text>
            ) : (
              <Text style={styles.smallText}>J&T Express</Text>
            )}
          </>
        )}

        <Text style={styles.smallText}>
          Phí:{' '}
          {id === 2 ? (
            <Text style={[styles.smallText, { color: colors.blueCyan }]}>
              30.000 đ
            </Text>
          ) : (
            <>
              {id === 0 ? (
                <Text style={[styles.smallText, { color: colors.blueCyan }]}>
                  16.000 đ
                </Text>
              ) : (
                <Text style={[styles.smallText, { color: colors.blueCyan }]}>
                  20.000 đ
                </Text>
              )}
            </>
          )}
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
