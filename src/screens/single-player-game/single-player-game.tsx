import React, { ReactElement } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Board, GradientBackground, Text } from '@components';
import { BoardState, isGameOver } from '@utils';
import { styles } from './single-player-game.styles';

export default function SinglePlayerGame(): ReactElement {
  // prettier-ignore
  const state: BoardState = [
    'x', null, 'x', 
    'o', 'x', null, 
    'x', 'o', 'o',
  ];
  isGameOver(state);
  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <Text>Game</Text>
        <Board
          size={300}
          state={state}
          onCellPress={(index: number) => {
            alert(index);
          }}
        />
      </SafeAreaView>
    </GradientBackground>
  );
}
