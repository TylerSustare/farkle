import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { ReactElement } from 'react';
import { Home, SinglePlayerGame } from '@screens';

export type StackNavigatorParams = {
  Home: undefined;
  SinglePlayerGame: { gameId: string };
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
        <Stack.Screen name="SinglePlayerGame" component={SinglePlayerGame} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
