import React, {useState} from 'react';
import {RadioGroupProps} from '../../resources/interfaces/components/radioGroup';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles';
/*
* Usage <RadioGroup list={Array of objects} renderItem={(item, selected) => <CircleColor item={item}
                                                                                        radius={wdp(8)}
                                                                                        selected={selected === item.id}/>}
                    onValueChange={(item) =>  console.log(item)} radius={wdp(8)}/>
* */
const RadioGroup = ({
  list,
  renderItem,
  onValueChange,
  selected,
  style,
}: RadioGroupProps) => {
  const [selectedValue, setSelectedValue] = useState(selected);
  const onItemPress = val => {
    setSelectedValue(val);
    if (onValueChange) {
      onValueChange(val);
    }
  };
  return (
    <View style={[styles.container, style]}>
      {list.map(item => (
        <TouchableOpacity key={item.id} onPress={() => onItemPress(item.id)}>
          {renderItem(item, selectedValue)}
        </TouchableOpacity>
      ))}
    </View>
  );
};
export default RadioGroup;
