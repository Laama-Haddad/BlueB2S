import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './style';
import {SearchBarProps} from '../../resources/interfaces/components/searchBar';
import Icon from '../Icon';
import {useTheme} from '@react-navigation/native';

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
        size={theme.text.s9}
        color={theme.searchBar.icon}
        style={styles.icon}
      />
      <TextInput
        style={[
          {fontSize: theme.text.s9, color: theme.searchBar.value},
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
