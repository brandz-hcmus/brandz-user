import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import PageHeader from '../components/PageHeader';
import ProductDetail from '../components/ProductDetail';
import ProductDetailTab from '../components/ProductDetailTab';
import ProductEvaluate from '../components/ProductEvaluate';

const ProductDetailPage = ({ navigation, route }) => {
  const { srcImg, title, salePrice, price, BULogoSrcImg, BUName, id } =
    route.params;

  const itemData = {
    srcImg,
    title,
    salePrice,
    price,
    BULogoSrcImg,
    BUName,
    id,
  };
  return (
    <SafeAreaView style={styles.wrapper}>
      <PageHeader title="CHI TIẾT SẢN PHẨM" />
      {/* <ProductDetailTab /> */}
      <ProductDetail itemData={itemData} />
      {/* <ProductEvaluate /> */}
    </SafeAreaView>
  );
};

export default ProductDetailPage;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
