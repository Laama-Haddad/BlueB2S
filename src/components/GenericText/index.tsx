import React from 'react';
import {Text} from 'react-native';
import {GenericTextProps} from '../../resources/interfaces/components/genericText';
import {useTheme} from '@react-navigation/native';

const GenericText = ({style, children, ...props}: GenericTextProps) => {
  const theme = useTheme();
  if (!!style && style?.fontWeight) {
    return (
      <Text
        style={{
          fontFamily:
            style.fontWeight === 'bold'
              ? theme.fonts.bold
              : style.fontWeight === '600'
              ? theme.fonts.semi_bold
              : theme.fonts.regular,
        }}>
        {children}
      </Text>
    );
  } else {
    return <Text {...props}>{children}</Text>;
  }
};

export default GenericText;
