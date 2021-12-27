import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  CheckBox,
} from 'react-native';
import { colors } from '../../../styles/color';
import Voucher from './icons/voucher.svg';
import Narrow from './icons/narrow.svg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ScreenName } from '../../../share/configs/routers';
import { NumberToVND } from '../../../share/utils/formatter';

export function Footer({ selectedItems, navigation }) {
  const [totalPrice, setTotalPrice] = React.useState(0);
  React.useEffect(() => {
    let sum = 0;
    selectedItems.forEach((item) => {
      sum += item.price * item.quantity;
    });

    setTotalPrice(sum);
  }, [selectedItems]);

  const gotoPayment = () => {
    navigation.navigate(ScreenName.PAYMENT_SCREEN, { items: selectedItems });
  };
  return (
    <View style={styles.footer}>
      <View style={styles.voucherContainer}>
        <View style={styles.voucherItemContainer}>
          <Text style={{ marginRight: 5 }}>Voucher</Text>
          <Voucher />
        </View>
        <TouchableOpacity style={styles.voucherItemContainer}>
          <Text style={{ color: colors.blueCyan, marginRight: 5 }}>
            Chon voucher
          </Text>
          <View style={styles.voucherItemContainer}>
            <Narrow />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <View>
          <Text>Tổng cộng</Text>
          <Text style={{ color: colors.red }}>{NumberToVND(totalPrice)}</Text>
        </View>

        <TouchableHighlight
          disabled={selectedItems.length === 0}
          onPress={gotoPayment}
        >
          <View style={styles.button}>
            <Text style={styles.btnText}>MUA NGAY</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  button: {
    backgroundColor: colors.black,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 2,
  },
  btnText: {
    color: colors.white,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  voucherContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    paddingLeft: 15,
    paddingRight: 10,
    paddingVertical: 10,
    borderTopColor: colors.backGround,
    borderTopWidth: 2,
    borderBottomColor: colors.backGround,
    borderBottomWidth: 2,
  },
  voucherItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
