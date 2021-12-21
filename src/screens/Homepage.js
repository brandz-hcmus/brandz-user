import React from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import {Entypo} from '@expo/vector-icons'
import HomeHeader from '../components/HomeHeader';
import Banner from '../components/Banner';
import CategoryCard from '../components/CategoryCard';

export function Homepage() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <ScrollView>
        <Banner />
        <CategoryCard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
