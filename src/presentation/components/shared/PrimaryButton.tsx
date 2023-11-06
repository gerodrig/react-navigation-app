import React from 'react';
import {Pressable, Text} from 'react-native';
import {globalStyles} from '../../theme/theme';

interface Props {
  label: string;
  textColor?: string;
  color?: string;
  onPress?: () => void;
}

export const PrimaryButton = ({label, textColor, color, onPress}: Props) => {
  return (
    <Pressable
      onPress={() => onPress && onPress()}
      style={
        color
          ? {...globalStyles.primaryButton, backgroundColor: color}
          : globalStyles.primaryButton
      }>
      <Text
        style={
          textColor
            ? {...globalStyles.buttonText, color: textColor}
            : globalStyles.buttonText
        }>
        {label}
      </Text>
    </Pressable>
  );
};
