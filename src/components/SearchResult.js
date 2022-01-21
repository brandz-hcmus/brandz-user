import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ScreenSizes } from '../share/utils/sizes';
import { colors } from '../styles/color';
import SearchResultCard from './SearchResultCard';
import { ScreenName } from '../share/configs/routers';

const SearchResult = ({ visible, data, notFound }) => {
  if (!visible) return null;

  const navigation = useNavigation();

  if (notFound) {
    console.log('not found ne');
    return (
      <View style={styles.wrapper}>
        <Text style={styles.notFoundText}>{notFound}</Text>
      </View>
    );
  }

  const _navigateProductDetail = (item) => {
    const { id, srcImg, title, salePrice, price, BULogoSrcImg } = item;
    console.log('press ne');
    navigation.navigate(ScreenName.PRODUCT_DETAIL_SCREEN, {
      srcImg,
      title,
      salePrice,
      price,
      id,
    });
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.resultTitle}>Kết quả tìm kiếm :</Text>
      {visible && (
        <ScrollView>
          {data.map((item) => (
            <TouchableOpacity
              onPress={() => _navigateProductDetail(item)}
              key={item.id}
            >
              <SearchResultCard item={item} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default SearchResult;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: ScreenSizes.vw * 0.96,
    display: 'flex',
    flexDirection: 'column',
    padding: 8,
    height: ScreenSizes.vh / 2.5,
    position: 'absolute',
    top: 88,
    left: 8,
    zIndex: 999,
  },
  notFoundText: {
    color: colors.white,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  resultTitle: {
    fontStyle: 'normal',
    fontWeight: '600',
    color: colors.white,
    fontSize: 16,
    marginBottom: 16,
  },
});
