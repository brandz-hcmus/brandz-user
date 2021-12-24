import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { CartHeader } from '../../header/cart';
import { Address } from '../cart/components/Address';
import { ProductList } from './components/ProductList';
import { colors } from '../../styles/color';
import { Transport } from './components/Transport';
import { PaymentDetail } from './components/PaymentDetail';
import { Footer } from './components/Footer';

export function PayMent({ navigation, route }) {
  return (
    <View style={{ flex: 1 }}>
      <CartHeader content={'THANH TOAN'}></CartHeader>

      <ScrollView style={styles.body}>
        <Address />
        <ProductList products={route.params.items}></ProductList>
        <Transport />
        <PaymentDetail />
      </ScrollView>
      <Footer selectedItems={route.params.items} />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: colors.backGround,
    marginBottom: 60,
  },
});
