import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

interface Props {
  children: React.ReactNode;
}

export function GradientBackground({ children }: Props): React.ReactElement {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <LinearGradient
        colors={['#006ea1', '#cf2b2b']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
      />
      {children}
    </View>
  );
}
