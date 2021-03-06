import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScreenSizes } from '../share/utils/sizes';
import { cart } from '../store/cart';
import { AddToCartModal } from './AddToCartModal';

const CartCTA = ({ item }) => {
  return (
    <View style={styles.wrapper}>
      <Ionicons
        style={styles.icon}
        name="ios-heart-outline"
        size={32}
        color="black"
      />
      <View style={styles.addToCartCTA}>
        <TouchableOpacity
          onPress={() => {
            cart.addItem(item);
            cart.toggleModal();
          }}
        >
          <View style={styles.addToCart}>
            <Text style={styles.addToCartText}>THÊM VÀO GIỎ HÀNG</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.buyNow}>
          <Text style={styles.buyNowText}>MUA NGAY</Text>
        </View>
      </View>
      <AddToCartModal />
    </View>
  );
};

export default CartCTA;

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    width: ScreenSizes.vw,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  icon: {
    marginLeft: 8,
  },
  addToCartCTA: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  addToCart: {
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
    padding: 12,
    marginRight: 8,
  },
  addToCartText: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
    color: '#000',
  },
  buyNow: {
    borderRadius: 8,
    backgroundColor: '#000',
    padding: 12,
  },
  buyNowText: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 20,
    color: '#fff',
  },
});
