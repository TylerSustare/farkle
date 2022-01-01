import React, { ReactElement, ReactNode } from 'react';
import { Text as NativeText, TextProps as NativeTextProps } from 'react-native';

// type Props = { bold?: boolean; } & NativeTextProps;
interface Props extends NativeTextProps {
  bold?: boolean;
  children: ReactNode;
}

export function Text({ children, style, bold, ...props }: Props): ReactElement {
  const fontFamily = bold
    ? 'DeliusUnicase_700Bold'
    : 'DeliusUnicase_400Regular';
  return (
    <NativeText style={[{ fontFamily }, style]} {...props}>
      {children}
    </NativeText>
  );
}

export default Text;
