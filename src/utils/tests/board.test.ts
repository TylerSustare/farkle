import {
  availableMoves,
  formattedBoard,
  getWinnerResults,
  isEmpty,
  isFull,
  isGameOver,
  winningConditions,
} from '../board';
import { BoardResult, BoardState } from '../types';

describe('board utility tests', () => {
  describe('formattedBoard', () => {
    it('should return the correct formatted board', () => {
      const board: BoardState = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x'];
      const fmt = formattedBoard(board);
      expect(fmt).toBe(
        ' x | o | x \n' +
          '--- --- ---\n' +
          ' o | x | o \n' +
          '--- --- ---\n' +
          ' x | o | x ',
      );
    });

    it('should print an empty board', () => {
      const board: BoardState = [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ];
      expect(formattedBoard(board)).toBe(
        '  |  |  \n' +
          '--- --- ---\n' +
          '  |  |  \n' +
          '--- --- ---\n' +
          '  |  |  ',
      );
    });
  });

  describe('isEmpty', () => {
    it('should return true for an empty board', () => {
      const board: BoardState = [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ];
      expect(isEmpty(board)).toBe(true);
    });

    it('should return false for a non-empty board', () => {
      const board: BoardState = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'];
      expect(isEmpty(board)).toBe(false);
    });
  });

  describe('isFull', () => {
    it('should return true for a full board', () => {
      const board: BoardState = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'];
      expect(isFull(board)).toBe(true);
    });

    it('should return false for a non-full board', () => {
      const board: BoardState = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', null];
      expect(isFull(board)).toBe(false);
    });
  });

  describe('availableMoves', () => {
    it('should return all available moves', () => {
      const board: BoardState = [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ];
      expect(availableMoves(board)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    });

    it('should return no available moves', () => {
      const board: BoardState = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x'];
      expect(availableMoves(board)).toEqual([]);
    });
    it('should return only one available move', () => {
      const board: BoardState = ['x', 'x', 'o', 'x', 'o', 'x', 'x', 'o', null];
      expect(availableMoves(board)).toEqual([8]);
    });
  });

  describe('getWinnerResults', () => {
    describe('horizontal wins', () => {
      it('should declare "x" the winner for a horizontal win in row 1', () => {
        const result: BoardResult = {
          row: 1,
          direction: 'horizontal',
          winner: 'x',
        };
        expect(
          getWinnerResults({ player: 'x', conditions: winningConditions[0] }),
        ).toEqual(result);
      });
      it('should declare "x" the winner for a horizontal win in row 2', () => {
        const result: BoardResult = {
          row: 2,
          direction: 'horizontal',
          winner: 'x',
        };
        expect(
          getWinnerResults({ conditions: winningConditions[1], player: 'x' }),
        ).toEqual(result);
      });
      it('should declare "o" the winner for a horizontal win in row 3', () => {
        const result: BoardResult = {
          row: 3,
          direction: 'horizontal',
          winner: 'o',
        };
        expect(
          getWinnerResults({ conditions: winningConditions[2], player: 'o' }),
        ).toEqual(result);
      });
    });

    describe('vertical wins', () => {
      it('should declare "x" the winner for a vertical win in column 3', () => {
        const result: BoardResult = {
          column: 3,
          direction: 'vertical',
          winner: 'x',
        };
        expect(
          getWinnerResults({ conditions: winningConditions[5], player: 'x' }),
        ).toEqual(result);
      });
      it('should declare "x" the winner for a vertical win in column 2', () => {
        const result: BoardResult = {
          column: 2,
          direction: 'vertical',
          winner: 'x',
        };
        expect(
          getWinnerResults({ conditions: winningConditions[4], player: 'x' }),
        ).toEqual(result);
      });
      it('should declare "o" the winner for a vertical win in column 1', () => {
        const result: BoardResult = {
          column: 1,
          direction: 'vertical',
          winner: 'o',
        };
        expect(
          getWinnerResults({ conditions: winningConditions[3], player: 'o' }),
        ).toEqual(result);
      });
    });

    describe('diagonal wins', () => {
      it('should declare "x" the winner for a diagonal win in the main diagonal', () => {
        const result: BoardResult = {
          diagonal: 'main',
          direction: 'diagonal',
          winner: 'x',
        };
        expect(
          getWinnerResults({ conditions: winningConditions[6], player: 'x' }),
        ).toEqual(result);
      });
      it('should declare "o" the winner for a diagonal win in the counter diagonal', () => {
        const result: BoardResult = {
          diagonal: 'counter',
          direction: 'diagonal',
          winner: 'o',
        };
        expect(
          getWinnerResults({ conditions: winningConditions[7], player: 'o' }),
        ).toEqual(result);
      });
    });
  });

  describe('isGameOver', () => {
    it('should return false if the game has not started', () => {
      // prettier-ignore
      const board: BoardState = [ null, null, null, null, null, null, null, null, null, ];
      expect(isGameOver(board)).toBe(false);
    });
    it('should return false if the game is not over', () => {
      // prettier-ignore
      const board: BoardState = [
        'x', 'o', null,
        null, null, null,
        null, null, null,
      ];
      expect(isGameOver(board)).toBe(false);
    });
    it('should return winner of null with a tie game', () => {
      // prettier-ignore
      const board: BoardState = [
        'x', 'o', 'x',
        'x', 'o', 'x',
        'o', 'x', 'o'
      ];
      expect(isGameOver(board)).toEqual({
        winner: null,
      });
    });
    it('should declare x a winner', () => {
      // prettier-ignore
      const board: BoardState = [
        'x', 'o', 'x',
        'x', 'o', 'x',
        'o', 'x', 'x'
      ];
      expect(isGameOver(board)).toEqual({
        winner: 'x',
        column: 3,
        direction: 'vertical',
      });
    });
  });
});
