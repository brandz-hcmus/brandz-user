import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import HomeHeader from '../components/HomeHeader';
import Banner from '../components/Banner';
import CategoryList from '../components/CategoryList';
import BUList from '../components/BUList';
import FlashsaleCard from '../components/FlashsaleCard';
import Flashsale from '../components/Flashsale';
import { FlashsaleData } from '../share/utils/constants';

export function Homepage() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <ScrollView>
        {/* <Banner />
        <CategoryList />
        <BUList /> */}
        {/* <Flashsale /> */}
        <FlashsaleCard srcImg={FlashsaleData[0].srcImg} title={FlashsaleData[0].title} price={FlashsaleData[0].price} salePrice={FlashsaleData[0].salePrice} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
});
