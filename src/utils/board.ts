import { BoardDirections, BoardResult, BoardState, Cell, Moves } from './types';

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

const winningLines = [
  // horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // diagonal
  [0, 4, 8],
  [2, 4, 6],
];

const winningDirections: Record<number, BoardDirections> = {
  0: 'horizontal',
  1: 'horizontal',
  2: 'horizontal',
  3: 'vertical',
  4: 'vertical',
  5: 'vertical',
  6: 'diagonal',
  7: 'diagonal',
};

export const isGameOver = (state: BoardState): BoardResult | false => {
  if (isEmpty(state)) return false;

  for (let index = 0; index < winningLines.length; index++) {
    const winningCondition = winningLines[index];
    const [cell1, cell2, cell3] = winningCondition;

    // Check if all cells are the same player
    if (
      state[cell1] &&
      state[cell1] === state[cell2] &&
      state[cell1] === state[cell3]
    ) {
      return getBoardResult({ index: index, player: state[cell1] });
    }
  }
  if (isFull(state)) return { winner: null };
  return false;
};

interface GetBoardResultArgs {
  index: number;
  player: Cell;
}
export const getBoardResult = ({
  index,
  player,
}: GetBoardResultArgs): BoardResult => {
  const winner: BoardResult = {
    winner: player,
    direction: winningDirections[index],
  };
  if (index < 3) {
    winner.row = index === 0 ? 1 : index === 1 ? 2 : 3;
  }
  if (index >= 3 && index <= 5) {
    winner.column = index === 3 ? 1 : index === 4 ? 2 : 3;
  }
  if (index >= 6) {
    winner.diagonal = index === 6 ? 'main' : 'counter';
  }
  return winner;
};
