import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import StaticImages from '../share/static/images';

const BUCard = ({ srcImg }) => {
  return (
    <View>
      <Image source={srcImg} style={styles.cardWrapper}></Image>
    </View>
  );
};

export default BUCard;

const styles = StyleSheet.create({
  cardWrapper: {
    width: 144,
    height: 144,
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 16,
    marginHorizontal: 12,
  },
});
