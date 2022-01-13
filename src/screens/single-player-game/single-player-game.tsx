import React, { ReactElement } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Board, GradientBackground, Text } from '@components';
import { BoardState, formattedBoard } from '@utils';
import { styles } from './single-player-game.styles';

export default function SinglePlayerGame(): ReactElement {
  const state: BoardState = ['x', 'o', null, 'x', 'o', null, 'x', 'o', 'x'];
  formattedBoard(state);
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
