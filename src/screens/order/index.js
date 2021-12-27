import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, useWindowDimensions, ScrollView, SafeAreaView } from 'react-native';

import { CartHeader } from '../../header/cart';
import { colors } from '../../styles/color';
import { Filter } from './components/Filter';
import { ProductList } from './components/ProductList';
import PageHeader from '../../components/PageHeader';

export function Order() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageHeader title={'ĐƠN HÀNG CỦA BẠN'} />
      <Filter />

      <ScrollView>
        <ProductList />
      </ScrollView>
    </SafeAreaView>
  );
}
