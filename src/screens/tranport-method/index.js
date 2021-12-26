import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { CartHeader } from '../../header/cart';
import JAndT from './icons/JT.svg';
import GHTK from './icons/GHTK.svg';
import Grab from './icons/grab.svg';
import { colors } from '../../styles/color';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScreenName } from '../../share/configs/routers';
import { delayTime } from '../../share/utils/async';
import Spinner from 'react-native-loading-spinner-overlay';

export function TransportMethod() {
  const [selectedID, setSelectedID] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  const navigation = useNavigation();
  const route = useRoute();
  React.useEffect(() => {
    if (route.params.id) {
      setSelectedID(route.params.id);
    }
  }, [route.params]);

  const onSetSelectedID = async (id) => {
    setLoading(true);
    await delayTime(500);
    setLoading(false);
    setSelectedID(id);
  };
  return (
    <View style={{ flex: 1 }}>
      <Spinner visible={loading} />
      <CartHeader
        navigation={navigation}
        content={'PHƯƠNG THỨC VAN CHUYEN'}
      ></CartHeader>
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
            <Grab width={50} height={50} />
            <View style={{ flex: 1, marginLeft: 15 }}>
              <Text style={{ fontWeight: 'bold' }}>Grab express</Text>
              <Text>Phí: 16.000 đ</Text>
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
            <JAndT width={50} height={50} />
            <View style={{ flex: 1, marginLeft: 15 }}>
              <Text style={{ fontWeight: 'bold' }}>J&T express</Text>
              <Text>Phí: 20.000 đ</Text>
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
            <GHTK width={50} height={50} />
            <View style={{ flex: 1, marginLeft: 15 }}>
              <Text style={{ fontWeight: 'bold' }}>Giao hang tiet kiem</Text>
              <Text>Phi: 30.000 đ</Text>
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
      <View style={styles.footer}>
        <TouchableHighlight
          onPress={() =>
            navigation.navigate({
              name: ScreenName.PAYMENT_SCREEN,
              params: { transportID: selectedID },
              merge: true,
            })
          }
        >
          <View style={styles.button}>
            <Text style={styles.btnText}>Xác nhận</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
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
