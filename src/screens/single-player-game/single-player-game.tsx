import React, { ReactElement } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Board, GradientBackground, Text } from '@components';
import { styles } from './single-player-game.styles';

export default function SinglePlayerGame(): ReactElement {
  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <Text>Game</Text>
        <Board
          state={['x', 'o', null, 'x', 'o', null, 'x', 'o', null]}
          size={300}
          onCellPress={(index: number) => {
            alert(index);
          }}
        />
      </SafeAreaView>
    </GradientBackground>
  );
}
