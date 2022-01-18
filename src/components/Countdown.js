import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useCountdown from "@bradgarropy/use-countdown"

const Countdown = ({ ...props }) => {
  const countdown=useCountdown({
    minutes:9,
    seconds:30,
    format:"mm:ss",
    onCompleted: () => console.log("onCompleted"),
  })
  return (
    <View style={styles.wrapper} {...props}>
      <View style={styles.squareBox}>
        <Text style={styles.time}>00</Text>
      </View>
      <Text style={styles.semicolon}>:</Text>
      <View style={styles.squareBox}>
        <Text style={styles.time}>0{countdown.minutes}</Text>
      </View>
      <Text style={styles.semicolon}>:</Text>
      <View style={styles.squareBox}>
        <Text style={styles.time}>{countdown.seconds}</Text>
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
