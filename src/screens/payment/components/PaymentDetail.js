import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { colors } from '../../../styles/color';
import Payment from './icons/payment.svg';
import Narrow from './icons/narrow-left.svg';
import { ScreenName } from '../../../share/configs/routers';
export function PaymentDetail({ price, ship }) {
  const navigation = useNavigation();
  const route = useRoute();
  const [paymentID, setPaymentID] = React.useState(0);

  React.useEffect(() => {
    if (route.params.paymentID !== undefined) {
      setPaymentID(route.params.paymentID);
    }
  }, [route.params]);
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(ScreenName.PAYMENT_METHOD_SCREEN, {
          id: paymentID,
          price: price,
          ship: ship,
        })
      }
      style={styles.container}
    >
      <View style={styles.headerContainer}>
        <View style={styles.voucherItemContainer}>
          <Text style={styles.header}>Phương thức thanh toán</Text>
          <Payment width={13} height={15}></Payment>
        </View>

        <TouchableOpacity style={styles.paymentContainer}>
          <View style={styles.voucherItemContainer}>
            <Narrow width={13} height={13} />
          </View>
        </TouchableOpacity>
      </View>
      <View>
        {paymentID === 2 ? (
          <Text style={styles.smallText}>Thanh toán khi nhận hàng</Text>
        ) : (
          <>
            {paymentID === 0 ? (
              <Text style={styles.smallText}>Ví điển tử BrandZ</Text>
            ) : (
              <Text style={styles.smallText}>Credit/Debit Card</Text>
            )}
          </>
        )}
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
