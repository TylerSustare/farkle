import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { BoardState } from '@utils';
import { Board } from './board';

describe('<Board />', () => {
  const emptyBoardState: BoardState = [
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
  it('should render', () => {
    const board = render(
      <Board state={emptyBoardState} size={1} onCellPress={jest.fn} />,
    );
    expect(board).toBeTruthy();
  });

  it('should render 9 cells', () => {
    const { getAllByTestId } = render(
      <Board state={emptyBoardState} size={1} onCellPress={jest.fn} />,
    );
    expect(getAllByTestId(/^cell-/)).toHaveLength(9);
  });

  it('should tap on a cell with index 4', () => {
    const onCellPress = jest.fn();
    const { getByTestId } = render(
      <Board state={emptyBoardState} size={1} onCellPress={onCellPress} />,
    );
    fireEvent.press(getByTestId('cell-4'));
    expect(onCellPress).toHaveBeenCalledWith(4);
  });
});
