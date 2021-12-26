import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import { ScreenName, ScreenTitle } from '../share/configs/routers';
import { Homepage } from './home';
import { CartScreen } from './cart';
import { colors } from '../styles/color';
import { PayMent } from './payment';
import { PaymentMethod } from './payment-method';
import { Order } from './order';
import { CartHeader } from '../header/cart';
import { TransportMethod } from './tranport-method';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <>
      <StatusBar backgroundColor={'transparent'} translucent />

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={ScreenName.HOME_SCREEN}
        >
          <Stack.Screen name={ScreenName.HOME_SCREEN} component={Homepage} />
          <Stack.Screen name={ScreenName.CART_SCREEN} component={CartScreen} />
          <Stack.Screen name={ScreenName.PAYMENT_SCREEN} component={PayMent} />
          <Stack.Screen
            name={ScreenName.PAYMENT_METHOD_SCREEN}
            component={PaymentMethod}
          />
          <Stack.Screen name={ScreenName.ORDER_SCREEN} component={Order} />
          <Stack.Screen
            name={ScreenName.TRANSPORT_METHOD_SCREEN}
            component={TransportMethod}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
