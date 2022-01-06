import { cleanup, fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { Button } from './button';

describe('<Button/>', () => {
  afterEach(cleanup);
  it('should render a <Button/> component', () => {
    const fn = jest.fn();
    const { getByText } = render(<Button title="Hello" onPress={fn} />);
    const component = getByText('Hello');
    expect(component).toBeTruthy();
  });
  it('<Button/> component should act like a regular button', () => {
    const fn = jest.fn();
    const { getByText } = render(<Button title="Hello" onPress={fn} />);
    const component = getByText('Hello');
    fireEvent.press(component);
    expect(fn).toHaveBeenCalled();
  });
});
