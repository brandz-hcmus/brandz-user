import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ScreenName } from '../share/configs/routers';
import { ScreenSizes } from '../share/utils/sizes';
import { colors } from '../styles/color';

const Label = ({ title }) => {
  const navigation = useNavigation();
  const _navigateToProductsPage = () => {
    navigation.navigate(ScreenName.PRODUCTS_SCREEN);
  };
  return (
    <>
      <View style={styles.labelWrapper}>
        <Text style={styles.label}>{title}</Text>
        <TouchableOpacity
          style={styles.seeMore}
          onPress={_navigateToProductsPage}
        >
          <Text style={styles.seeMoreText}>Xem thêm</Text>
          <Ionicons
            name="ios-chevron-forward-outline"
            size={20}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.divider}></View>
    </>
  );
};

export default Label;

const styles = StyleSheet.create({
  labelWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
    paddingBottom: 4,
  },
  label: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    color: '#ff4444',
  },
  seeMore: {
    display: 'flex',
    flexDirection: 'row',
  },
  seeMoreText: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 20,
    textAlign: 'center',
    color: colors.black,
  },
  divider: {
    width: ScreenSizes.vw *0.9,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: '#000',
    marginLeft: 16,
  },
});
