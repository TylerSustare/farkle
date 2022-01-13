import React, { ReactElement } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from '../text/text';

export type Cell = 'x' | 'o' | null;
interface Props {
  state: [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell];
  size: number;
  onCellPress: (_index: number) => void;
}
export function Board({ state, size, onCellPress }: Props): ReactElement {
  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor: 'green',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
    >
      {state.map((cell, index) => (
        <TouchableOpacity
          testID={`cell-${index}`}
          onPress={() => onCellPress(index)}
          key={index}
          style={{
            width: '33.33%',
            height: '33.33%',
            backgroundColor: 'red',
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ fontSize: size / 8 }}>{cell}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
