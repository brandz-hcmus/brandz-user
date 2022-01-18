import React, { useState } from 'react';
import { StyleSheet, ScrollView, SafeAreaView, View, Text } from 'react-native';
import HomeHeader from '../components/HomeHeader';
import Banner from '../components/Banner';
import CategoryList from '../components/CategoryList';
import BUList from '../components/BUList';
import Flashsale from '../components/Flashsale';
import HotDeals from '../components/HotDeals';
import Suggestions from '../components/Suggestions';
import SearchResult from '../components/SearchResult';

export function Homepage() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <ScrollView style={styles.wrapper}>
        <Banner />
        <CategoryList />
        <BUList />
        <View style={styles.productWrapper}>
          <Flashsale />
          <HotDeals />
          <Suggestions />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : 60,
  },
  wrapper: {
    position: 'relative',
  },
  productWrapper: {
    backgroundColor: '#fff',
    borderRadius: 8,
  },
});
