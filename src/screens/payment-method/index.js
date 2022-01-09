import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { CartHeader } from '../../header/cart';
import Wallet from './icons/Wallet.svg';
import Cash from './icons/Cash.svg';
import Visa from './icons/Visa.svg';
import { colors } from '../../styles/color';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScreenName } from '../../share/configs/routers';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Spinner from 'react-native-loading-spinner-overlay';
import { delayTime } from '../../share/utils/async';
import PageHeader from '../../components/PageHeader';
import { Calc } from '../payment/components/Calc';

export function PaymentMethod() {
  const [selectedID, setSelectedID] = React.useState(0);
  const [shipPrice, setShipPrice] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  React.useEffect(() => {
    if (route.params.id) {
      setSelectedID(route.params.id);
    }
    if (route.params.price) {
      setTotalPrice(route.params.price);
    }
    if (route.params.ship) {
      setShipPrice(route.params.ship);
    }
  }, [route.params]);

  const onSetSelectedID = async (id) => {
    setLoading(true);
    await delayTime(500);
    setLoading(false);
    setSelectedID(id);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Spinner visible={loading} />
      <PageHeader title={'PHƯƠNG THỨC THANH TOÁN'} />
      <View style={styles.suggestContainer}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
          Đề xuất
        </Text>
        <TouchableWithoutFeedback onPress={() => onSetSelectedID(0)}>
          <View
            style={[
              styles.suggestItem,
              selectedID === 0 && styles.selectedItem,
            ]}
          >
            <Wallet width={50} height={50} />
            <View style={{ flex: 1, marginLeft: 15 }}>
              <Text style={{ fontWeight: 'bold' }}>BrandZ Wallet</Text>
              <Text>Ví điện tử Brandz</Text>
            </View>
            <BouncyCheckbox
              size={20}
              isChecked={selectedID === 0}
              disableBuiltInState={true}
              fillColor={colors.blueCyan}
              iconStyle={{ borderColor: colors.borderColor }}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.otherContainer}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
          Phương thức khác
        </Text>
        <TouchableWithoutFeedback onPress={() => onSetSelectedID(1)}>
          <View
            style={[
              styles.innerContainer,
              selectedID === 1 && styles.selectedItem,
            ]}
          >
            <Visa width={50} height={50} />
            <View style={{ flex: 1, marginLeft: 15 }}>
              <Text style={{ fontWeight: 'bold' }}>Credit/Debit</Text>
              <Text>355364575858</Text>
            </View>
            <BouncyCheckbox
              size={20}
              isChecked={selectedID === 1}
              fillColor={colors.blueCyan}
              disableBuiltInState
              iconStyle={{ borderColor: colors.borderColor }}
            />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => onSetSelectedID(2)}>
          <View
            style={[
              styles.innerContainer,
              selectedID === 2 && styles.selectedItem,
            ]}
          >
            <Cash width={50} height={50} />
            <View style={{ flexDirection: 'row', flex: 1 }}>
              <Text style={{ marginLeft: 15, fontWeight: 'bold' }}>
                Thanh toán khi nhận hàng
              </Text>
            </View>
            <BouncyCheckbox
              size={20}
              isChecked={selectedID === 2}
              fillColor={colors.blueCyan}
              disableBuiltInState
              iconStyle={{ borderColor: colors.borderColor }}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <Calc ship={shipPrice} totalPrice={totalPrice} />
      <View style={styles.footer}>
        <TouchableHighlight
          onPress={() =>
            navigation.navigate({
              name: ScreenName.PAYMENT_SCREEN,
              params: { paymentID: selectedID },
              merge: true,
            })
          }
        >
          <View style={styles.button}>
            <Text style={styles.btnText}>Xác nhận</Text>
          </View>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  suggestContainer: {
    backgroundColor: colors.white,
    padding: 10,
  },
  otherContainer: {
    backgroundColor: colors.white,
    marginTop: 5,
    padding: 10,
  },
  suggestItem: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: colors.backGround,
  },
  innerContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: colors.backGround,
    marginBottom: 20,
  },

  selectedItem: {
    backgroundColor: colors.lightBlue,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: colors.white,
    left: 0,
    right: 0,
    padding: 10,
    paddingVertical: 20,
    alignItems: 'center',
  },
  button: {
    backgroundColor: colors.black,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: colors.white,
  },
});
