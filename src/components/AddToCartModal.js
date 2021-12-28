import { observer } from 'mobx-react';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { colors } from '../styles/color';
import { cart } from '../store/cart';
import { useNavigation } from '@react-navigation/native';
import { ScreenName } from '../share/configs/routers';

export const AddToCartModal = observer(() => {
  const navigation = useNavigation();
  return (
    <Modal
      transparent={true}
      style={styles.modal}
      hasBackdrop={true}
      isVisible={cart.showModal}
    >
      <View style={styles.container}>
        <Text style={{ color: colors.black, fontSize: 18 }}>
          ĐÃ THÊM SẢN PHẨM VÀO GIỎ HÀNG
        </Text>

        <TouchableOpacity
          style={styles.deleteBtn}
          onPress={() => {
            cart.toggleModal();
            navigation.navigate(ScreenName.CART_SCREEN);
          }}
        >
          <Text style={styles.whiteText}>ĐẾN GIỎ HÀNG</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
});

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },

  container: {
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },

  deleteBtn: {
    backgroundColor: colors.red,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  cancelBtn: {
    backgroundColor: colors.black,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 2,
  },

  whiteText: {
    color: colors.white,
  },
  center: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
});
