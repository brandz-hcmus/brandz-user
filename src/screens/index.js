import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabScreens from './TabScreens';
import { Homepage } from './Homepage';
import ProductListPage from './ProductList';
import ProductDetailPage from './ProductDetailPage';
import { ScreenName, ScreenTitle } from '../share/configs/routers';
import { CartScreen } from './cart';
import { PayMent } from './payment';
import { PaymentMethod } from './payment-method';
import { Order } from './order';
import { CartHeader } from '../header/cart';
import { TransportMethod } from './tranport-method';
import { StatusBar } from 'expo-status-bar';
import { colors } from '../styles/color';
import SearchPage from './SearchPage';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <>
      <StatusBar style="light" backgroundColor={colors.black} />

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={ScreenName.MAIN_SCREEN}
          screenOptions={{
            headerShown: false,
          }}
        >
          {/* Tab Screens */}
          <Stack.Screen name={ScreenName.HOME_SCREEN} component={Homepage} />
          <Stack.Screen
            name={ScreenName.TRANSPORT_METHOD_SCREEN}
            component={TransportMethod}
          />
          {/* End tab screens */}
          <Stack.Screen name={ScreenName.CART_SCREEN} component={CartScreen} />
          <Stack.Screen name={ScreenName.PAYMENT_SCREEN} component={PayMent} />
          <Stack.Screen
            name={ScreenName.PAYMENT_METHOD_SCREEN}
            component={PaymentMethod}
          />
          <Stack.Screen name={ScreenName.ORDER_SCREEN} component={Order} />
          <Stack.Screen name={ScreenName.MAIN_SCREEN} component={TabScreens} />
          <Stack.Screen
            name={ScreenName.SEARCH_SCREEN}
            component={SearchPage}
          />
          <Stack.Screen
            name={ScreenName.PRODUCTS_SCREEN}
            component={ProductListPage}
          />
          <Stack.Screen
            name={ScreenName.PRODUCT_DETAIL_SCREEN}
            component={ProductDetailPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
