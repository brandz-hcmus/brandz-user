import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView, View,Text } from 'react-native';
import HomeHeader from '../components/HomeHeader';
import Banner from '../components/Banner';
import CategoryList from '../components/CategoryList';
import BUList from '../components/BUList';
import Flashsale from '../components/Flashsale';
import HotDeals from '../components/HotDeals';
import Suggestions from '../components/Suggestions';

export function Homepage() {
  return (
    <SafeAreaView style={styles.container}>
       <HomeHeader />
      <ScrollView>
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
  },
  productWrapper: {
    backgroundColor: '#fff',
    borderRadius: 8,
  },
});
