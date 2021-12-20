import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { ScreenName } from '../share/configs/routers';

export function Homepage({ navigation }) {
  const goToCartScreen = () => {
    navigation.navigate(ScreenName.CART_SCREEN);
  };
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <Button onPress={goToCartScreen} title="BACK"></Button>
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
