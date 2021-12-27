import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Delete from './icons/carbon_delete.svg';
import { colors } from '../../../styles/color';
import { DeleteModal } from './Modal';

export function AllSelect({
  onCheckAll,
  isChecked,
  selectNumber,
  onDeleteMany,
}) {
  const [showModal, setShowModal] = React.useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const onClickModal = (type) => {
    setShowModal(false);
    if (type === 'delete') {
      onDeleteMany();
    }
  };
  return (
    <View style={styles.container}>
      <DeleteModal
        content={`Xóa ${selectNumber} sản phẩm  khỏi giỏ hàng?`}
        onClickModal={onClickModal}
        showModal={showModal}
      />
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

      <TouchableOpacity disabled={selectNumber === 0} onPress={openModal}>
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
    display: 'flex',
    flexDirection: 'row',
  },
  leftItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
