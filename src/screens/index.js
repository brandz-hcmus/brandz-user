import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenName } from '../share/configs/routers';
import { Homepage } from './Homepage';
import { StatusBar } from 'react-native';
import NotificationPage from './NotificationPage';
import BottomMenu from '../components/BottomMenu';
import TabScreens from './TabScreens';
const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <>
      <StatusBar backgroundColor="#086981" barStyle="light-content" />

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={ScreenName.MAIN_SCREEN}
        >
          <Stack.Screen
            name={ScreenName.MAIN_SCREEN}
            component={TabScreens}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
