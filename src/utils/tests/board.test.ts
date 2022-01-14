import { availableMoves, formattedBoard, isEmpty, isFull } from '../board';
import { BoardState } from '../types';

describe('board tests', () => {
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
});
