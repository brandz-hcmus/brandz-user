import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomeHeader from '../components/HomeHeader';
import SearchResult from '../components/SearchResult';
import SearchResultCard from '../components/SearchResultCard';
import { ScreenSizes } from '../share/utils/sizes';

const SearchPage = ({}) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <HomeHeader />
      <View style={styles.blankSpace}></View>
    </SafeAreaView>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : 60,
  },
  blankSpace: {
    width: ScreenSizes.vw,
    height: ScreenSizes.vh - 48,
    position: 'relative',
  },
});
