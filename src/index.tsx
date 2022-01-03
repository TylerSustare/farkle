import React, { ReactElement } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Bootstrap } from '@components';
import { Navigator } from '@config/navigator';

export function App(): ReactElement {
  return (
    <Bootstrap>
      <SafeAreaProvider>
        <Navigator />
      </SafeAreaProvider>
    </Bootstrap>
  );
}
