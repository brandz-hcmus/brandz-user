import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Delete from './icons/carbon_delete.svg';
import { colors } from '../../../styles/color';

export function AllSelect({ onCheckAll, isChecked }) {
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

      <TouchableHighlight>
        <View style={styles.deleteBtn}>
          <Delete width={20} height={20}></Delete>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginTop: 5,
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
  },
  leftItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
