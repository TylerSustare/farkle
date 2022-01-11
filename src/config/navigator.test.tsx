import { fireEvent, render } from '@testing-library/react-native';
import * as React from 'react';
import { Navigator } from '@config/navigator';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('<Navigator/>', () => {
  test('should navigate to the single player game screen by tapping on the "Single Player" button', async () => {
    const component = <Navigator />;

    const { getByText } = render(component);
    const toClick = getByText(/Single Player/);

    fireEvent(toClick, 'press');
    const newBody = getByText(/Game/);

    expect(newBody).toBeTruthy();
  });
});
