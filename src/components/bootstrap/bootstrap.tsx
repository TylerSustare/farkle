import React, { ReactElement, ReactNode } from 'react';
import {
  useFonts,
  DeliusUnicase_400Regular,
  DeliusUnicase_700Bold,
} from '@expo-google-fonts/delius-unicase';
import AppLoading from 'expo-app-loading';

interface Props {
  children: ReactNode;
}

export function Bootstrap({ children }: Props): ReactElement {
  const [fontsLoaded] = useFonts({
    DeliusUnicase_400Regular,
    DeliusUnicase_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;
  return fontsLoaded ? <>{children}</> : <AppLoading />;
}
