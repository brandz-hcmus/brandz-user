import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import HomeHeader from '../components/HomeHeader';
import Banner from '../components/Banner';
import CategoryList from '../components/CategoryList';
import BUList from '../components/BUList';
import Countdown from '../components/Countdown'

export function Homepage() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <ScrollView>
        <Banner />
        <CategoryList />
        <BUList />
        <Countdown />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
});
