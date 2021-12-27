import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { ScreenName } from '../share/configs/routers';
import StaticImages from '../share/static/images';
import { FormatVND } from '../share/utils/formatter';
import { useNavigation } from '@react-navigation/native';

const ProductCard = ({ srcImg, title, salePrice, price, id }) => {
  const navigation = useNavigation();
  const _onPress = () => {
    navigation.navigate(ScreenName.PRODUCT_DETAIL_SCREEN, {
      srcImg,
      title,
      salePrice,
      price,
      id,
    });
  };
  return (
    <TouchableOpacity style={styles.cardWrapper} onPress={_onPress}>
      <Image style={styles.imgWrapper} source={srcImg} />
      <View style={styles.infoWrapper}>
        <Text style={styles.productTitle}>{title}</Text>
        <View style={styles.priceWrapper}>
          <Text style={styles.salePrice}>{FormatVND(salePrice)}</Text>
          <Text style={styles.price}>{FormatVND(price)}</Text>
          <View></View>
        </View>
        <View style={styles.evaluateWrapper}>
          <Image style={styles.starIcon} source={StaticImages.star}></Image>
          <Text style={styles.starNum}>4.9</Text>
          <Text style={styles.evaluateNum}>(100 đánh giá)</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate(ScreenName.CART_SCREEN)}
        style={styles.addToCardCTA}
      >
        <Text style={styles.addToCardText}>Thêm vào giỏ hàng</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  cardWrapper: {
    width: 96,
    height: 176,
    borderRadius: 8,
    backgroundColor: '#c4c4c4',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 24,
    marginHorizontal: 8,
    marginTop: 8,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 5,
    shadowOpacity: 0.1,
  },
  imgWrapper: {
    width: 96,
    height: 96,
    borderRadius: 8,
  },
  infoWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 4,
  },
  addToCardCTA: {
    height: 19.2,
    width: 96,
    borderRadius: 8,
    backgroundColor: '#fc1717',
    marginHorizontal: 'auto',
  },
  addToCardText: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 10,
    lineHeight: 20,
    color: '#fff',
    textAlign: 'center',
  },
  productTitle: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12,
    color: '#000',
    height: 32,
  },
  priceWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  salePrice: {
    fontStyle: 'normal',
    fontSize: 14,
    fontWeight: '500',
    fontSize: 10,
    color: '#ff4444',
  },
  price: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 10,
    color: '#929292',
    textDecorationLine: 'line-through',
  },
  evaluateWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    width: 8,
    height: 8,
    borderRadius: 8,
    marginRight: 4,
  },
  starNum: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 8,
    lineHeight: 20,
    color: '#000',
    marginRight: 2,
  },
  evaluateNum: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 8,
    lineHeight: 20,
    color: '#929292',
  },
});
