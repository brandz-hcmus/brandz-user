import React from 'react';
import { useRoute } from '@react-navigation/native';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { CartHeader } from '../../header/cart';
import { Address } from '../cart/components/Address';
import { ProductList } from './components/ProductList';
import { colors } from '../../styles/color';
import { Transport } from './components/Transport';
import { PaymentDetail } from './components/PaymentDetail';
import { Footer } from './components/Footer';
import { Calc } from './components/Calc';
import PageHeader from '../../components/PageHeader';

export function PayMent() {
  const [totalPrice, setTotalPrice] = React.useState(0);
  const route = useRoute();
  const [transportID, setTransportID] = React.useState(0);
  const [shipPrice, setShipPrice] = React.useState(16000);

  React.useEffect(() => {
    if (route.params.transportID !== undefined) {
      setTransportID(route.params.transportID);
      if (route.params.transportID === 0) {
        setShipPrice(16000);
      } else if (route.params.transportID === 1) {
        setShipPrice(20000);
      } else {
        setShipPrice(30000);
      }
    }
  }, [route.params.transportID]);

  React.useEffect(() => {
    let sum = 0;
    route.params.items.forEach((item) => {
      sum += item.price * item.quantity;
    });
    setTotalPrice(sum);
  }, [route.params.items]);

  return (
    <View style={{ flex: 1 }}>
      <PageHeader title={'THANH TOÁN'} />
      <ScrollView style={styles.body}>
        <Address />
        <ProductList products={route.params.items}></ProductList>
        <Transport id={transportID} />
        <PaymentDetail />
        <Calc totalPrice={totalPrice} ship={shipPrice} />
      </ScrollView>
      <Footer
        selectedItems={route.params.items}
        price={totalPrice + shipPrice}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: colors.backGround,
    marginBottom: 60,
  },
});
