import React, { ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Game, Home } from '@screens';

export type StackNavigatorParams = {
  Home: undefined;
  Game: { gameId: string };
};

const Stack = createStackNavigator<StackNavigatorParams>();
export function Navigator(): ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Game" component={Game} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
