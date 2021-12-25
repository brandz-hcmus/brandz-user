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
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { DeleteModal } from './Modal';
import { colors } from '../../../styles/color';

export function ProductList({
  products,
  changeQuantity,
  deleteItem,
  onToggle,
}) {
  const [showModal, setShowModal] = React.useState(false);
  const selectedId = useRef(0);

  const onDelete = (id) => {
    selectedId.current = id;
    setShowModal(true);
  };

  const onClickModal = (type) => {
    setShowModal(false);

    if (type === 'delete') {
      deleteItem(selectedId.current);
    }
  };

  return (
    <>
      <SafeAreaView style={{ marginBottom: 100 }}>
        <DeleteModal
          content={'Xóa sản phẩm này khỏi giỏ hàng?'}
          onClickModal={onClickModal}
          showModal={showModal}
        />
        {products.map((product) => (
          <View style={styles.productItem} key={product.id}>
            <View style={styles.leftItem}>
              <BouncyCheckbox
                size={20}
                fillColor={colors.blueCyan}
                isChecked={product.isSelected}
                disableBuiltInState={true}
                onPress={() => onToggle(product.id)}
                iconStyle={{ borderColor: colors.borderColor }}
              />
              <Image
                style={styles.productImage}
                source={{ uri: product.url }}
              />
            </View>
            <View style={styles.rightItem}>
              <Text style={styles.productName}>{product.name}</Text>

              <View style={styles.centerView}>
                <Text style={styles.smallText}>Màu: </Text>
                <View
                  style={[
                    styles.colorContainer,
                    { backgroundColor: product.color },
                  ]}
                ></View>
              </View>
              <Text style={styles.smallText}>Size: {product.size}</Text>
              <Text style={styles.productPrice}>{product.price} d</Text>
              <View style={styles.centerView}>
                <View style={[styles.centerView, styles.quantityBtn]}>
                  <TouchableOpacity
                    onPress={() => changeQuantity(product.id, 'increase')}
                    style={styles.plusBtn}
                  >
                    <View>
                      <Text style={styles.smallText}>+</Text>
                    </View>
                  </TouchableOpacity>
                  <View>
                    <Text style={styles.smallText}>{product.quantity}</Text>
                  </View>

                  <TouchableOpacity
                    onPress={() => changeQuantity(product.id, 'decrease')}
                    style={styles.minusBtn}
                  >
                    <Text style={styles.smallText}>-</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  onPress={() => onDelete(product.id)}
                  style={styles.deleteItemBtn}
                >
                  <Text style={{ color: colors.blueCyan }}>Xóa</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  productImage: {
    width: 120,
    height: 150,
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
