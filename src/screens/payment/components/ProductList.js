import React, { useRef } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';
import { NumberToVND } from '../../../share/utils/formatter';
import { colors } from '../../../styles/color';

export function ProductList({ products }) {
  return (
    <SafeAreaView>
      {products.map((product) => (
        <View style={styles.productItem} key={product.id}>
          <View style={styles.leftItem}>
            <Image style={styles.productImage} source={product.srcImg} />
          </View>
          <View style={styles.rightItem}>
            <Text style={styles.productName}>{product.title}</Text>

            <View style={styles.centerView}>
              <Text style={styles.smallText}>Màu: </Text>
              <View
                style={[styles.colorContainer, { backgroundColor: '#a4a4a4' }]}
              ></View>
            </View>
            <Text style={styles.smallText}>Size: X</Text>
            <Text style={styles.productPrice}>
              {NumberToVND(product.salePrice)}
            </Text>
            <Text style={styles.smallText}>Số lượng: {product.quantity}</Text>
            <View style={styles.centerView}></View>
          </View>
        </View>
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  productImage: {
    width: 120,
    height: 150,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingRight: 10,
  },
  productItem: {
    backgroundColor: colors.white,
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  colorContainer: {
    width: 20,
    height: 20,
    borderRadius: 20,
  },
  productPrice: {
    color: colors.red,
  },
  leftItem: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  rightItem: {
    marginLeft: 10,
    justifyContent: 'space-evenly',
  },
  smallText: {
    fontSize: 12,
  },
  centerView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityBtn: {
    borderColor: colors.borderColor,
    borderWidth: 0.5,
    borderRadius: 2,
    width: 90,
    justifyContent: 'space-between',
  },
  plusBtn: {
    paddingVertical: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRightColor: colors.borderColor,
    borderRightWidth: 0.5,
    width: 30,
  },
  minusBtn: {
    paddingVertical: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderLeftColor: colors.borderColor,
    borderLeftWidth: 0.5,

    width: 30,
  },
  deleteItemBtn: {
    paddingHorizontal: 10,
    paddingVertical: 2,

    marginLeft: 30,
  },
  modalBackground: {
    margin: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  modal: {
    backgroundColor: colors.white,
  },
});
