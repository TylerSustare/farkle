import { BoardState } from './types';

export function formattedBoard(board: BoardState): string {
  return board
    .map((cell, i) => {
      let line = cell ? ` ${cell} |` : ' |';
      if (i % 3 === 2) {
        line = line.slice(0, -1);
        if (i < board.length - 1) line += '\n--- --- ---\n';
      }
      return line;
    })
    .join('');
}
