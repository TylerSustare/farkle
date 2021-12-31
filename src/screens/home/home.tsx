import { StackNavigatorParams } from '@config/navigator';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { ReactElement } from 'react';
import { ScrollView, Text, Button } from 'react-native';
import { styles } from './home.styles';
import { GradientBackground } from '@components';

interface Props {
  navigation: StackNavigationProp<StackNavigatorParams, 'Home'>;
}

export default function Home({ navigation }: Props): ReactElement {
  return (
    <GradientBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <Text>Home</Text>
        <Button
          title="Game"
          onPress={() => navigation.navigate('Game', { gameId: '123' })}
        />
      </ScrollView>
    </GradientBackground>
  );
}
