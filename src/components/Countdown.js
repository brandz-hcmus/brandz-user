import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Countdown = ({ ...props }) => {
  return (
    <View style={styles.wrapper} {...props}>
      <View style={styles.squareBox}>
        <Text style={styles.time}>00</Text>
      </View>
      <Text style={styles.semicolon}>:</Text>
      <View style={styles.squareBox}>
        <Text style={styles.time}>00</Text>
      </View>
      <Text style={styles.semicolon}>:</Text>
      <View style={styles.squareBox}>
        <Text style={styles.time}>00</Text>
      </View>
    </View>
  );
};

export default Countdown;

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 24,
  },
  squareBox: {
    width: 30,
    height: 26,
    borderRadius: 4,
    backgroundColor: '#b31310',
  },
  time: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 22,
    color: '#fff',
  },
  semicolon: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgba(178, 19, 16, 1)',
    marginHorizontal: 4,
  },
});
