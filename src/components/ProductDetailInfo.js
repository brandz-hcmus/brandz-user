import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DataTable } from 'react-native-paper';
import ProductDetailInfoLayout from './ProductDetailInfoLayout';

const ProductDetailInfo = ProductDetailInfoLayout(({ detail }) => {
    console.log(detail)
  return (
    <View style={styles.wrapper}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Tiêu chí</DataTable.Title>
          <DataTable.Title>Mô tả</DataTable.Title>
        </DataTable.Header>
        {detail.map((item, index) => {
          return index % 2 == 0 ? (
            <DataTable.Row key={index}>
              <DataTable.Cell>{item.title}</DataTable.Cell>
              <DataTable.Cell>{item.content}</DataTable.Cell>
            </DataTable.Row>
          ) : (
            <DataTable.Row style={styles.oddRow} key={index}>
              <DataTable.Cell>{item.title}</DataTable.Cell>
              <DataTable.Cell>{item.content}</DataTable.Cell>
            </DataTable.Row>
          );
        })}
      </DataTable>
    </View>
  );
});

export default ProductDetailInfo;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 4,
  },
  oddRow: {
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
  },
});
