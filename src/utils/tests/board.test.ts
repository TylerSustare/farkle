import { formattedBoard } from '../board';
import { BoardState } from '../types';

describe('board tests', () => {
  it('should return the correct formatted board', () => {
    const board: BoardState = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'];
    const fmt = formattedBoard(board);
    expect(fmt).toBe(
      ' x | x | x \n' +
        '--- --- ---\n' +
        ' x | x | x \n' +
        '--- --- ---\n' +
        ' x | x | x ',
    );
  });
});
