import React from 'react';
import { View, StyleSheet } from 'react-native';
import {Entypo} from '@expo/vector-icons'
import HomeHeader from '../components/HomeHeader';
import Banner from '../components/Banner';

export function Homepage() {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <Banner />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
