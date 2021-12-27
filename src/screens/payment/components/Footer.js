import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  CheckBox,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Spinner from 'react-native-loading-spinner-overlay';
import { colors } from '../../../styles/color';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ScreenName } from '../../../share/configs/routers';
import { delayTime } from '../../../share/utils/async';
import { NumberToVND } from '../../../share/utils/formatter';

export function Footer({ price, selectedItems }) {
  const [loading, setLoading] = React.useState(false);

  const navigation = useNavigation();

  const goToOrder = async () => {
    setLoading(true);
    await delayTime(1000);
    setLoading(false);
    navigation.navigate(ScreenName.ORDER_SCREEN, {
      products: selectedItems,
      totalPrice: price,
    });
  };

  return (
    <View style={styles.footer}>
      <Spinner visible={loading} />
      <View style={styles.buttonContainer}>
        <View>
          <Text>Tổng tiền phải trả</Text>
          <Text style={{ color: colors.red }}>{NumberToVND(price)}</Text>
        </View>

        <TouchableHighlight style={styles.button} onPress={goToOrder}>
          <View>
            <Text style={styles.btnText}>ĐẶT HÀNG</Text>
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
    borderRadius: 8,
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
