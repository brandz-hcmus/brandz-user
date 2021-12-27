import React from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import StaticImages from '../share/static/images';
import { FormatVND } from '../share/utils/formatter';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ScreenName } from '../share/configs/routers';

const ProductListCard = ({
  srcImg,
  title,
  price,
  salePrice,
  BULogoSrcImg,
  BUName,
  id,
}) => {
  const navigation = useNavigation();
  const _onPress = () => {
    navigation.navigate(ScreenName.PRODUCT_DETAIL_SCREEN, {
      srcImg,
      title,
      salePrice,
      price,
      BULogoSrcImg,
      BUName,
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
        <View style={styles.BUInfoWrapper}>
          <View style={styles.BUInfo}>
            <Image style={styles.BULogo} source={BULogoSrcImg}></Image>
            <Text style={styles.BUName}>{BUName}</Text>
          </View>
          <View style={styles.BUIcon}>
            <Feather
              style={styles.CTAIcon}
              name="heart"
              size={20}
              color="black"
            />
            <MaterialCommunityIcons
              style={styles.CTAIcon}
              name="cart-plus"
              size={20}
              color="black"
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductListCard;

const styles = StyleSheet.create({
  cardWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: 176,
    backgroundColor: '#c4c4c4',
    borderRadius: 8,
    margin: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 5,
    shadowOpacity: 0.2,
  },
  imgWrapper: {
    width: 176,
    height: 190,
    borderRadius: 8,
  },
  infoWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 4,
    borderRadius: 8,
  },
  productTitle: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#000',
  },
  priceWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    lineHeight: 20,
  },
  salePrice: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12,
    color: '#ff4444',
    lineHeight: 20,
  },
  price: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    color: '#929292',
    textDecorationLine: 'line-through',
  },
  evaluateWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
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
    fontSize: 10,
    lineHeight: 20,
    color: '#000',
    marginRight: 2,
  },
  evaluateNum: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 10,
    lineHeight: 20,
    color: '#929292',
  },
  BUInfoWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  BUInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  BUIcon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  BULogo: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  BUName: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 10,
    lineHeight: 20,
    color: '#000',
    marginLeft: 4,
  },
  CTAIcon: {
    marginHorizontal: 4,
  },
});
