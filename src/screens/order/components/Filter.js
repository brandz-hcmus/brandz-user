import React from 'react';
import FilterBtn from './icons/Filter.svg';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../../styles/color';
export function Filter() {
  return (
    <View style={styles.filter}>
      <TouchableOpacity>
        <View style={styles.filterBtn}>
          <Text>Đang chờ xác nhận</Text>
          <FilterBtn width={20} height={20} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  filter: {
    backgroundColor: colors.white,
    padding: 10,
  },

  filterBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 200,
    borderColor: colors.borderColor,
    paddingVertical: 5,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderRadius: 2,
  },
});
