import { BoardState, Moves } from './types';

export function formattedBoard(board: BoardState): string {
  return board
    .map((cell, i) => {
      let line = cell ? ` ${cell} |` : '  |';
      if (i % 3 === 2) {
        line = line.slice(0, -1);
        if (i < board.length - 1) line += '\n--- --- ---\n';
      }
      return line;
    })
    .join('');
}

export const isEmpty = (state: BoardState): boolean => {
  return state.every((cell) => cell === null);
};

export const isFull = (state: BoardState): boolean => {
  return state.every((cell) => cell);
};

export const availableMoves = (state: BoardState): Moves[] => {
  const moves: Moves[] = [];
  state.forEach((cell, index) => {
    if (cell === null) {
      moves.push(index as Moves);
    }
  });
  return moves;
};
