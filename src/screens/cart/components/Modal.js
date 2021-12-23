import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { colors } from '../../../styles/color';

export function DeleteModal({ onClickModal, showModal, content }) {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    setShow(showModal);
  }, [showModal]);
  return (
    <Modal
      transparent={true}
      hasBackdrop={true}
      isVisible={show}
      animationIn={'bounceIn'}
      animationOut={'bounceOut'}
    >
      <View style={styles.modal}>
        <Text style={{ color: colors.black, fontSize: 18 }}>{content}</Text>
        <View style={styles.center}>
          <TouchableOpacity
            style={styles.deleteBtn}
            onPress={() => onClickModal('delete')}
          >
            <Text style={styles.whiteText}>Xóa</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancelBtn}
            onPress={() => onClickModal('cancel')}
          >
            <Text style={styles.whiteText}>Hủy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: colors.white,
    marginHorizontal: 20,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
  },

  deleteBtn: {
    backgroundColor: colors.red,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 2,
    marginRight: 20,
  },
  cancelBtn: {
    backgroundColor: colors.black,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 2,
  },

  whiteText: {
    color: colors.white,
  },
  center: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
});
