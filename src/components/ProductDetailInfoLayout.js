import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { ScreenSizes } from '../share/utils/sizes';

const ProductDetailInfoLayout = (Component) => (props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{props.title}</Text>
        <View style={styles.divider}></View>
      </View>
      <Component {...props} />
      <View style={styles.seeMoreCTA}>
        <Text style={styles.seeMoreText}>Xem thêm</Text>
        <Entypo name="chevron-down" size={24} color="black" />
      </View>
    </View>
  );
};

export default ProductDetailInfoLayout;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 5,
    shadowOpacity: 0.2,
    marginBottom: 16,
  },
  titleWrapper: {
    marginBottom: 8,
  },
  title: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 20,
    color: '#000',
  },
  divider: {
    width: ScreenSizes.vw *0.9,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
  },
  seeMoreCTA: {
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 'auto',
    justifyContent: 'center',
    padding: 8,
    marginTop: 16,
  },
  seeMoreText: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 20,
    color: '#000',
  },
});
