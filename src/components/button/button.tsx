import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Text } from '../text/text';
import { styles } from './button.styles';

interface Props extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, style, ...props }: Props): React.ReactElement {
  return (
    <TouchableOpacity {...props} style={[styles.button, style]}>
      <Text bold style={styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
