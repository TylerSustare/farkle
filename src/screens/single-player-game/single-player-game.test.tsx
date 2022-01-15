import { render } from '@testing-library/react-native';
import React from 'react';
import SinglePlayerGame from './single-player-game';

describe('<SinglePlayerGame />', () => {
  it('WIP test - should render the single player screen', () => {
    const { toJSON } = render(<SinglePlayerGame />);
    expect(toJSON()).toMatchSnapshot();
  });
});
