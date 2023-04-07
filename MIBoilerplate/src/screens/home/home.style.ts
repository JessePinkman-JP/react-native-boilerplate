import { StyleSheet } from 'react-native';

import { Palette } from '@src/utils';

export const homeStyles = ({ backgroundColor, primaryColor }: Palette) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: backgroundColor,
      flex: 1,
      justifyContent: 'center',
    },
    text: {
      color: primaryColor,
    },
  });
