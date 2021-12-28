import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import { Entypo, Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ScreenSizes } from '../share/utils/sizes';
import { colors } from '../styles/color';
import { ScreenName } from '../share/configs/routers';
import { cart } from '../store/cart';
import { Observer } from 'mobx-react';

const PageHeader = ({ title }) => {
  const navigation = useNavigation();
  const _goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.titleWrapper}>
        <TouchableOpacity onPress={_goBack}>
          <Entypo name="chevron-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.iconWrapper}>
        <Feather style={styles.icon} name="search" size={24} color="white" />
        <TouchableOpacity
          onPress={() => navigation.navigate(ScreenName.CART_SCREEN)}
        >
          <Ionicons
            style={styles.icon}
            name="cart-outline"
            size={24}
            color="white"
          />
          <Observer>
            {() => {
              const len = cart.cartLen;
              return (
                <View style={styles.cartCount}>
                  <Text style={styles.cartCountText}>{len}</Text>
                </View>
              );
            }}
          </Observer>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PageHeader;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    backgroundColor: colors.black,
    width: ScreenSizes.vw,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 65 : 14,
    paddingBottom: 14,
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 4,
  },
  iconWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 4,
  },
  title: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    color: '#fff',
  },
  icon: {
    marginHorizontal: 4,
  },
  cartCount: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#ff4444',
    position: 'absolute',
    right: 0,
    top: 0,
  },
  cartCountText: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 8,
    textAlign: 'center',
    color: '#fff',
  },
});
