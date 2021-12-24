import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import { CartHeader } from '../../header/cart';

export function Order() {
  const navigation = useNavigation();

  return (
    <View>
      <CartHeader content={'DON HANG CUA BAN'} />
      <Text>Order</Text>
    </View>
  );
}
