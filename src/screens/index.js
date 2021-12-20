import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import { ScreenName, ScreenTitle } from '../share/configs/routers';
import { Homepage } from './home';
import { CartScreen } from './cart';
import { colors } from '../styles/color';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <>
      <StatusBar backgroundColor={colors.black} />

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={ScreenName.HOME_SCREEN}
        >
          <Stack.Screen name={ScreenName.HOME_SCREEN} component={Homepage} />
          <Stack.Screen name={ScreenName.CART_SCREEN} component={CartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
