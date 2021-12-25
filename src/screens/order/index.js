import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import { CartHeader } from '../../header/cart';
import { History } from './components/History';
import { OrderCategory } from './components/OrderCategory';

export function Order() {
  const navigation = useNavigation();

  return (
    <View>
      <CartHeader content={'DON HANG CUA BAN'} />
      <OrderCategory />
      <History />
    </View>
  );
}
