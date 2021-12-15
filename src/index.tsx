import React, { ReactElement } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Bootstrap } from '@components';

export function App(): ReactElement {
  return (
    <Bootstrap>
      <View style={styles.container}>
        <Text style={{ fontSize: 25 }}>Hello World</Text>
      </View>
    </Bootstrap>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
