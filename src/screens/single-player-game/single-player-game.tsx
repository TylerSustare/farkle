import React, { ReactElement } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GradientBackground } from '@components';
import { styles } from './single-player-game.styles';

export default function SinglePlayerGame(): ReactElement {
  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <Text style={{ color: 'white' }}>Game</Text>
      </SafeAreaView>
    </GradientBackground>
  );
}
