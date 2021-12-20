import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Back from '../../../static/icons/GoBack.svg';
import Search from '../../../static/icons/Search.svg';
import Cart from '../../../static/icons/CartBtn.svg';
import { colors } from '../../styles/color';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export function CartHeader({ navigation }) {
  return (
    <View style={styles.header}>
      <View style={styles.left}>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <Back width={12} height={20} />
        </TouchableWithoutFeedback>
        <Text style={styles.leftText}>GIỎ HÀNG</Text>
      </View>
      <View style={styles.left}>
        <Search width={20} height={20} />
        <Cart width={20} height={20} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.black,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  left: {
    display: 'flex',
    flexDirection: 'row',
  },
  leftText: {
    color: colors.white,
    marginLeft: 5,
  },
});
