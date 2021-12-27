import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import StaticImages from '../share/static/images';
import { FormatVND } from '../share/utils/formatter';

const FlashsaleCard = ({ srcImg, title, salePrice, price }) => {
  return (
    <View style={styles.cardWrapper}>
      <Image style={styles.imgWrapper} source={srcImg} />
      <View style={styles.promotionRate}>
        <Text style={styles.promotionNum}>62%</Text>
      </View>
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
        <ProgressBar
          progress={0.5}
          color={Colors.red800}
          style={styles.progressWrapper}
        />
      </View>
      <TouchableOpacity style={styles.addToCardCTA}>
        <Text style={styles.addToCardText}>Thêm vào giỏ hàng</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FlashsaleCard;

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
  promotionRate: {
    backgroundColor: '#fc1717',
    position: 'absolute',
    borderRadius: 12,
    width: 24,
    height: 24,
  },
  promotionNum: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 10,
    color: '#ececec',
    textAlign: 'center',
    marginTop: 4,
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
  progressWrapper: {
    borderRadius: 8,
    marginBottom: 6,
  },
});
