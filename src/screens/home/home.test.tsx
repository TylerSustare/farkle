import { fireEvent, render } from '@testing-library/react-native';
import * as React from 'react';
import Home from './home';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('<Home/>', () => {
  const navigate = jest.fn();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mockNavigation = { navigate } as any;

  test('should render the menu buttons', async () => {
    const component = <Home navigation={mockNavigation} />;

    const { getByText } = render(component);
    const singlePlayer = getByText(/Single Player/);
    const multiPlayer = getByText(/Multi Player/);
    const login = getByText(/Login/);
    const settings = getByText(/Settings/);

    expect(singlePlayer).toBeTruthy();
    expect(multiPlayer).toBeTruthy();
    expect(login).toBeTruthy();
    expect(settings).toBeTruthy();
  });

  test('should click on the single player button with game params', async () => {
    const component = <Home navigation={mockNavigation} />;

    const { findByText } = render(component);
    const toClick = await findByText(/Single Player/);

    fireEvent(toClick, 'press');
    expect(navigate).toHaveBeenCalledWith('SinglePlayerGame', {
      gameId: '123',
    });
  });
});
