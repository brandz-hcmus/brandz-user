import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import StaticImages from '../share/static/images';
import { FontAwesome5, SimpleLineIcons } from '@expo/vector-icons';

const ProductEvaluateDetail = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Tiến Tài</Text>
        {[1, 2, 3, 4, 5].map((item, index) => (
          <Image
            key={index}
            style={styles.starIcon}
            source={StaticImages.star}
          />
        ))}
      </View>
      <Text style={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat
        dapibus purus, a hendrerit metus pellentesque eu. Maecenas tempor id
        enim a viverra
      </Text>
      <View style={styles.CTAWrapper}>
        <View style={styles.CTAIcon}>
          <SimpleLineIcons name="like" size={20} color="black" />
          <Text style={styles.CTAtitle}>Hữu ích (5)</Text>
        </View>
        <View style={styles.CTAIcon}>
          <FontAwesome5 name="comment-dots" size={20} color="black" />
          <Text style={styles.CTAtitle}>Trả lời (1)</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductEvaluateDetail;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    borderRadius: 8,
    flex: 1,
    marginVertical: 8,
    padding: 16,
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },

  titleText: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 20,
    color: '#000',
    marginRight: 8,
  },
  starIcon: {
    width: 16,
    height: 16,
    marginHorizontal: 4,
  },
  content: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 20,
    color: '#000',
    marginVertical: 8,
  },
  CTAWrapper: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginTop: 16,
  },
  CTAIcon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  CTAtitle: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 20,
    color: '#000',
    marginLeft: 4,
  },
});
