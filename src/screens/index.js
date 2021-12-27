import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenName } from '../share/configs/routers';
import { StatusBar } from 'react-native';
import TabScreens from './TabScreens';
import { Homepage } from './Homepage';
import NotificationPage from './NotificationPage'
import ProductListPage from './ProductList';
import ProductDetailPage from './ProductDetailPage';
const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <>
      <StatusBar backgroundColor="#086981" barStyle="light-content" />

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={ScreenName.MAIN_SCREEN}
        >
          {/* Tab Screens */}
          <Stack.Screen
            name={ScreenName.MAIN_SCREEN}
            component={TabScreens}
            options={{ headerShown: false }}
          />
          {/* End tab screens */}
          <Stack.Screen
            name={ScreenName.HOME_SCREEN}
            component={Homepage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={ScreenName.NOTIFICATION_SCREEN}
            component={NotificationPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={ScreenName.PRODUCTS_SCREEN}
            component={ProductListPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={ScreenName.PRODUCT_DETAIL_SCREEN}
            component={ProductDetailPage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
