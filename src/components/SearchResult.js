import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ScreenSizes } from '../share/utils/sizes';
import { colors } from '../styles/color';
import SearchResultCard from './SearchResultCard';

const SearchResult = ({ visible, data, notFound }) => {
  if (!visible) return null;

  if (notFound) {
    console.log('not found ne');
    return (
      <View style={styles.wrapper}>
        <Text style={styles.notFoundText}>{notFound}</Text>
      </View>
    );
  }
  return (
    <View style={styles.wrapper}>
      <Text style={styles.resultTitle}>Kết quả tìm kiếm :</Text>
      {visible && (
        <ScrollView>
          {data.map((item) => (
            <SearchResultCard item={item} key={item.id} />
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
