import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import HomeHeader from '../components/HomeHeader';
import Banner from '../components/Banner';
import CategoryList from '../components/CategoryList';

export function Homepage() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <ScrollView>
        <Banner />
        <CategoryList />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
