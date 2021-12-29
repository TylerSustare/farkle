import { StackNavigatorParams } from '@config/navigator';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { ReactElement } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './home.styles';

interface Props {
  navigation: StackNavigationProp<StackNavigatorParams, 'Home'>;
}

export default function Home({ navigation }: Props): ReactElement {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Game', { gameId: '123' })}
      />
    </View>
  );
}
