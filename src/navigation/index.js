import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN_NAME } from '../constants';
import { Homepage } from '../screens';

const Stack = createNativeStackNavigator();

export function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREEN_NAME.HOME}>
        <Stack.Screen name={SCREEN_NAME.HOME} component={Homepage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
