import {
  BoardDirections,
  BoardResult,
  BoardState,
  Cell,
  DiagonalDirection,
  Moves,
} from './types';

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

interface WinningCondition {
  cells: Moves[];
  direction: BoardDirections;
  row?: 1 | 2 | 3;
  column?: 1 | 2 | 3;
  diagonal?: DiagonalDirection;
}
export const winningConditions: WinningCondition[] = [
  {
    cells: [0, 1, 2],
    direction: 'horizontal',
    row: 1,
  },
  {
    cells: [3, 4, 5],
    direction: 'horizontal',
    row: 2,
  },
  {
    cells: [6, 7, 8],
    direction: 'horizontal',
    row: 3,
  },
  {
    cells: [0, 3, 6],
    direction: 'vertical',
    column: 1,
  },
  {
    cells: [1, 4, 7],
    direction: 'vertical',
    column: 2,
  },
  {
    cells: [2, 5, 8],
    direction: 'vertical',
    column: 3,
  },
  {
    cells: [0, 4, 8],
    direction: 'diagonal',
    diagonal: 'main',
  },
  {
    cells: [2, 4, 6],
    direction: 'diagonal',
    diagonal: 'counter',
  },
];

export const isGameOver = (state: BoardState): BoardResult | false => {
  if (isEmpty(state)) return false;

  for (let index = 0; index < winningConditions.length; index++) {
    const winningCondition = winningConditions[index].cells;
    const [cell1, cell2, cell3] = winningCondition;

    // Check if all cells are the same player
    if (
      state[cell1] &&
      state[cell1] === state[cell2] &&
      state[cell1] === state[cell3]
    ) {
      return getWinnerResults({
        conditions: winningConditions[index],
        player: state[cell1],
      });
    }
  }
  if (isFull(state)) return { winner: null };
  return false;
};

interface GetBoardResultArgs {
  conditions: WinningCondition;
  player: Cell;
}
export const getWinnerResults = ({
  conditions,
  player,
}: GetBoardResultArgs): BoardResult => {
  const { direction, row, column, diagonal } = conditions;
  return {
    winner: player,
    direction,
    column,
    row,
    diagonal,
  };
};
