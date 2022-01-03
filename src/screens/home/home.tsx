import { StackNavigationProp } from '@react-navigation/stack';
import React, { ReactElement } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { Button, GradientBackground, Text } from '@components';
import { StackNavigatorParams } from '@config/navigator';
import { styles } from './home.styles';

interface Props {
  navigation: StackNavigationProp<StackNavigatorParams, 'Home'>;
}

export default function Home({ navigation }: Props): ReactElement {
  return (
    <GradientBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={require('@assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>Tic-Tac-Toe</Text>
        <View style={styles.buttons}>
          <Button
            style={styles.button}
            title="Single Player"
            onPress={() =>
              navigation.navigate('SinglePlayerGame', { gameId: '123' })
            }
          />
          <Button
            style={styles.button}
            title="Multi Player"
            onPress={() => alert('multi player')}
          />
          <Button
            style={styles.button}
            title="Login"
            onPress={() => alert('login')}
          />
          <Button
            style={styles.button}
            title="Settings"
            onPress={() => alert('settings')}
          />
        </View>
      </ScrollView>
    </GradientBackground>
  );
}
