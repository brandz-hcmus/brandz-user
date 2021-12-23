import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Delete from './icons/carbon_delete.svg';
import { colors } from '../../../styles/color';

export function AllSelect({ onCheckAll, isChecked, selectNumber }) {
  return (
    <View style={styles.container}>
      <View style={styles.leftItem}>
        <BouncyCheckbox
          size={20}
          isChecked={isChecked}
          fillColor={colors.blueCyan}
          iconStyle={{ borderColor: colors.borderColor }}
          disableBuiltInState={true}
          onPress={() => onCheckAll()}
        />
        <Text>Tất cả sản phẩm</Text>
      </View>

      <TouchableOpacity>
        <View style={styles.deleteBtn}>
          <Text style={{ color: colors.white, marginRight: 5 }}>
            Xóa ({selectNumber}) sản phẩm
          </Text>
          <Delete width={20} height={20}></Delete>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginTop: 2,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deleteBtn: {
    backgroundColor: colors.red,
    borderRadius: 2,
    padding: 8,
    display: 'flex',
    flexDirection: 'row',
  },
  leftItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
