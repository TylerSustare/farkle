import {
  DeliusUnicase_400Regular,
  DeliusUnicase_700Bold,
  useFonts,
} from '@expo-google-fonts/delius-unicase';
import AppLoading from 'expo-app-loading';
import React, { ReactElement, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function Bootstrap({ children }: Props): ReactElement {
  const [fontsLoaded] = useFonts({
    DeliusUnicase_400Regular,
    DeliusUnicase_700Bold,
  });

  return fontsLoaded ? <>{children}</> : <AppLoading />;
}
