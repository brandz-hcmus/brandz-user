import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import StaticImages from '../share/static/images';
import { BUData } from '../share/utils/constants';
import { ScreenSizes } from '../share/utils/sizes';
import BUCard from './BUCard';
import Label from './Label';

const BUList = () => {
  return (
    <View style={styles.wrapper}>
      <Label title={'BU NỔI BẬT'}></Label>
      <View style={styles.listWrapper}>
        {BUData.map((item) => (
          <BUCard srcImg={item.srcImg} key={item.id} />
        ))}
      </View>
    </View>
  );
};

export default BUList;

const styles = StyleSheet.create({
  wrapper: {
    width: ScreenSizes.vw,
    borderRadius: 8,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 16,
    marginBottom: 16,
  },
  listWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: ScreenSizes.vw,
    alignItems:'center',
    justifyContent:'center'
  },
  imgWrapper: {
    width: 144,
    height: 144,
    borderRadius: 8,
  },
});
