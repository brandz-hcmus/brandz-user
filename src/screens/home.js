import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export function Homepage() {
  return (
    <View style={styles.container}>
      <Text>Homepage</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
