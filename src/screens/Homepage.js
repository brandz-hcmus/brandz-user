import React from 'react';
import { View, StyleSheet } from 'react-native';
import {Entypo} from '@expo/vector-icons'

export function Homepage() {
  return (
    <View style={styles.container}>
      <Entypo name="home" size={24}></Entypo>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
