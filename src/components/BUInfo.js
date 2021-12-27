import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import StaticImages from '../share/static/images';
import { AntDesign } from '@expo/vector-icons';

const BUInfo = ({ BULogoSrcImg, BUName }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.BUInfoWrapper}>
        <Image style={styles.logoWrapper} source={BULogoSrcImg} />
        <View style={styles.infoWrapper}>
          <Text style={styles.BUName}>{BUName}</Text>
          <Text style={styles.BUStatistic}>678k theo dõi | 123 sản phẩm</Text>
        </View>
      </View>
      <View style={styles.followCTA}>
        <AntDesign name="addusergroup" size={24} color="black" />
        <Text style={styles.followText}>Theo dõi</Text>
      </View>
    </View>
  );
};

export default BUInfo;

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    padding: 8,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 5,
    shadowOpacity: 0.2,
    marginBottom: 16,
  },
  BUInfoWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  logoWrapper: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  infoWrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 4,
  },
  BUName: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 20,
    color: '#000',
  },
  BUStatistic: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 20,
    color: '#000',
  },
  followCTA: {
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
    padding: 4,
  },
  followText: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 20,
    color: '#000',
  },
});
