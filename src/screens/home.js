import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export function Homepage() {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <Button title="BACX"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
