import React from 'react';
import { Text, View } from 'react-native';
import { CartHeader } from '../../header/cart';

export function PaymentMethod({ navigation }) {
  return (
    <View>
      <CartHeader
        navigation={navigation}
        content={'PHUONG THUC THANH TOAN'}
      ></CartHeader>
      <Text>Payment method</Text>
    </View>
  );
}
