import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import StaticImages from '../share/static/images';
import { FormatVND } from '../share/utils/formatter';
import Label from './Label';
import { ProductData, ProductDetailDataSample } from '../share/utils/constants';
import ProductCard from './ProductCard';
import BUInfo from './BUInfo';
import ProductDetailDescription from './ProductDetailDescription';
import ProductDetailInfo from './ProductDetailInfo';
import CartCTA from './CartCTA';
import { ScreenSizes } from '../share/utils/sizes';
import ProductEvaluate from './ProductEvaluate';

const ProductDetail = ({itemData}) => {
  const {srcImg,title,salePrice,price,BULogoSrcImg,BUName}=itemData
  return (
    <View style={styles.wrapper}>
      <ScrollView>
        <Image
          source={srcImg}
          style={styles.imgWrapper}
        />
        <View style={styles.infoWrapper}>
          <Text style={styles.productTitle}>
            {title}
          </Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.salePrice}>
              {FormatVND(salePrice)}
            </Text>
            <Text style={styles.price}>
              {FormatVND(price)}
            </Text>
            <View></View>
          </View>
          <View style={styles.evaluateWrapper}>
            <Image style={styles.starIcon} source={StaticImages.star}></Image>
            <Text style={styles.starNum}>4.9</Text>
            <Text style={styles.evaluateNum}>(100 đánh giá)</Text>
          </View>
        </View>
        <View style={styles.relatedProducts}>
          <Label title={'Sản phẩm tương tự'} />
          <View style={styles.listWrapper}>
            {ProductData.slice(0, 3).map((item) => (
              <ProductCard
                srcImg={item.srcImg}
                title={item.title}
                price={item.price}
                salePrice={item.salePrice}
                key={item.id}
              />
            ))}
          </View>
        </View>
        <BUInfo
          BULogoSrcImg={BULogoSrcImg?BULogoSrcImg:ProductDetailDataSample[0].BULogoSrcImg}
          BUName={BUName?BUName:ProductDetailDataSample[0].BUName}
        />
        <ProductDetailInfo
          title="Thông tin chi tiết"
          detail={ProductDetailDataSample[0].detail}
        />
        <ProductDetailDescription title="Mô tả sản phẩm" />
        <View style={[styles.relatedProducts, styles.endZone]}>
          <Label title={'Khám phá thêm'} />
          <View style={styles.listWrapper}>
            {ProductData.slice(3, 6).map((item) => (
              <ProductCard
                srcImg={item.srcImg}
                title={item.title}
                price={item.price}
                salePrice={item.salePrice}
                key={item.id}
              />
            ))}
          </View>
        </View>
        <ProductEvaluate />
      </ScrollView>
      <CartCTA />
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  imgWrapper: {
    width: ScreenSizes.vw,
    height: 496,
    marginBottom: 16,
  },
  infoWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingLeft: 16,
    paddingTop: 8,
    borderRadius: 8,
    marginBottom: 16,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 5,
    shadowOpacity: 0.2,
  },
  productTitle: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  priceWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    lineHeight: 20,
  },
  salePrice: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    color: '#ff4444',
    lineHeight: 20,
  },
  price: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    color: '#929292',
    textDecorationLine: 'line-through',
  },
  evaluateWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  starIcon: {
    width: 8,
    height: 8,
    borderRadius: 8,
    marginRight: 4,
  },
  starNum: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 20,
    color: '#000',
    marginRight: 2,
  },
  evaluateNum: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 20,
    color: '#929292',
  },
  relatedProducts: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    marginBottom: 16,
    borderRadius: 8,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 5,
    shadowOpacity: 0.2,
  },
  listWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems:'center',
    justifyContent:'center',
    padding: 16,
  },
  endZone: {
    marginBottom: 80,
  },
});
