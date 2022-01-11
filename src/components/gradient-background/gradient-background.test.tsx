import { cleanup, fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { GradientBackground } from './gradient-background';

describe('<GradientBackground/>', () => {
  afterEach(cleanup);
  it('should render a <GradientBackground /> with children', () => {
    const { container, toJSON } = render(
      <GradientBackground>
        <View>
          <Text>Hello</Text>
        </View>
      </GradientBackground>,
    );
    expect(container).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });

  it('should not modify children components in <GradientBackground />', () => {
    const fn = jest.fn();
    const { getByText } = render(
      <GradientBackground>
        <Button title="Hello" onPress={fn} />
      </GradientBackground>,
    );
    const button = getByText('Hello');
    fireEvent.press(button);
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
