import * as React from 'react';
import {forwardRef, useState} from 'react';
import {TextInput} from 'react-native-paper';
import {GenericTextInputProps} from '../../resources/interfaces/components/genericTextInput';
import {useTheme} from '@react-navigation/native';
import Icon from '../Icon';
import {getByScreenSize} from '../../utils/responsive';
import {View} from 'react-native';
import styles from './styles';

const GenericTextInput = forwardRef(
  (
    {
      label,
      secureTextEntry,
      noEye,
      required,
      textInputStyle,
      containerStyle,
      ...props
    }: GenericTextInputProps,
    ref,
  ) => {
    const theme = useTheme();
    const withEye = !noEye && secureTextEntry;
    const [passwordVisible, setPasswordVisible] = useState(false);
    return (
      <View style={containerStyle}>
        <TextInput
          ref={ref}
          activeUnderlineColor={theme.textInput.activeUnderlineColor}
          underlineColor={theme.textInput.underlineColor}
          secureTextEntry={withEye && !passwordVisible}
          label={label}
          style={[
            styles.textInput,
            {backgroundColor: theme.textInput.background},
            textInputStyle,
          ]}
          {...props}
        />
        {required && (
          <Icon
            type="Ionicons"
            name={'star'}
            color={theme.textInput.required}
            size={theme.text.s12}
            style={{
              position: 'absolute',
              left: getByScreenSize(8, 8),
              top: getByScreenSize(22, 25),
            }}
          />
        )}
        {withEye && (
          <Icon
            type="Ionicons"
            name={passwordVisible ? 'eye' : 'eye-off'}
            color={theme.textInput.eyeIcon}
            size={getByScreenSize(18, 30)}
            role="button"
            onPress={() => setPasswordVisible(!passwordVisible)}
            style={{
              backgroundColor: 'transparent',
              position: 'absolute',
              right: getByScreenSize(7, 3),
              top: getByScreenSize(17, 8),
            }}
          />
        )}
      </View>
    );
  },
);

export default GenericTextInput;
