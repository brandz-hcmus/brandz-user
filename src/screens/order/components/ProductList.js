import { useRoute } from '@react-navigation/native';
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

export function ProductList() {
  const [product, setProduct] = React.useState([]);
  const [len, setLen] = React.useState(0);

  const route = useRoute();

  React.useEffect(() => {
    if (route.params) {
      setProduct(route.params.products[0]);
      setLen(route.params.products.length);
    }
  }, [route.params]);

  return (
    <SafeAreaView>
      <View style={styles.productItem}>
        <View style={styles.leftItem}>
          <Image style={styles.productImage} source={{ uri: product.url }} />
          {len > 1 && (
            <View style={styles.addition}>
              <Text style={{ color: colors.white, fontSize: 18 }}>+{len}</Text>
            </View>
          )}
        </View>
        <View style={styles.rightItem}>
          <Text style={styles.productName}>
            <Text>{product.name} </Text>
            <Text>{len > 1 && `và ${len - 1} sản phẩm khác`}</Text>
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.smallText}>Trạng thái: </Text>
            <Text style={styles.status}>Đang chờ xác nhận</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.smallText}>Tổng tiền: </Text>
            <Text style={styles.productPrice}>
              {NumberToVND(route.params.totalPrice)}
            </Text>
          </View>

          <View style={styles.centerView}>
            <TouchableOpacity style={styles.detailBtn}>
              <Text style={{ color: colors.white, fontSize: 12 }}>
                Xem chi tiết
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteBtn}>
              <Text style={{ color: colors.white, fontSize: 12 }}>Hủy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  productImage: {
    width: 120,
    height: 150,
  },
  addition: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.25)',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  status: {
    color: colors.blueCyan,
    fontSize: 12,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingRight: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
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
    fontSize: 12,
  },
  leftItem: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative',
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
  detailBtn: {
    backgroundColor: colors.black,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginRight: 20,
  },
  deleteBtn: {
    backgroundColor: colors.red,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
});
