import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN_NAME } from '../constants';
import { Home } from '../screens';

const Stack = createNativeStackNavigator();

export function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREEN_NAME.home}>
        <Stack.Screen name={SCREEN_NAME.home} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
