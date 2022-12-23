import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './style';
import {SearchBarProps} from '../../resources/interfaces/components/searchBar';
import Icon from '../Icon';
import {useTheme} from '@react-navigation/native';
import {getByScreenSize} from '../../utils/responsive';

const SearchBar = ({
  searchBarStyle,
  textInputStyle,
  ...props
}: SearchBarProps) => {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.container,
        {borderColor: theme.searchBar.border},
        searchBarStyle,
      ]}>
      <Icon
        name={'search'}
        type={'FontAwesome'}
        size={getByScreenSize(theme.text.s7, theme.text.s5)}
        color={theme.searchBar.icon}
        style={styles.icon}
      />
      <TextInput
        style={[
          {
            fontSize: getByScreenSize(theme.text.s10, theme.text.s9),
            color: theme.searchBar.value,
          },
          styles.textInput,
          textInputStyle,
        ]}
        placeholderTextColor={theme.searchBar.placeHolder}
        {...props}
      />
    </View>
  );
};
export default SearchBar;
