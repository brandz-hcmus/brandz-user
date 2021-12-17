import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenName } from '../share/configs/routers';
import { Homepage } from './home';
import { StatusBar } from 'react-native';
const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <>
      <StatusBar backgroundColor="#086981" barStyle="light-content" />

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={ScreenName.HOME_SCREEN}
          screenOptions={{
            headerTintColor: '#ffffff',
            headerBackTitle: 'Trở về',
          }}
        >
          <Stack.Screen
            name={ScreenName.HOME_SCREEN}
            component={Homepage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
