import React, {useEffect} from 'react';
import {
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';
import {AccordionList} from 'react-native-accordion-list-view';
import styles from './styles';
import Icon from '../Icon';
import {useTheme} from '@react-navigation/native';
import {
  AccordionItemListProps,
  AccordionListBody,
} from '../../resources/interfaces/components/accordionItemListProps';
import GenericText from '../GenericText';

const AccordionItemList = ({
  data,
  type,
  containerStyle,
}: AccordionItemListProps) => {
  const theme = useTheme();
  useEffect(() => {
    if (Platform.OS === 'android') {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  }, []);
  const renderTitle = (title: string) => {
    return (
      <GenericText
        style={[
          styles.accordionItem,
          {fontSize: theme.text.s7, color: theme.accordionList.title},
        ]}>
        {title}
      </GenericText>
    );
  };
  const renderTextBody = (bodyItem: string) => {
    return (
      <GenericText
        style={{
          fontSize: theme.text.s8,
          color: theme.accordionList.item,
          paddingLeft: '5%',
        }}>
        {bodyItem}
      </GenericText>
    );
  };
  const renderListBody = (bodyItems: AccordionListBody[]) => {
    return (
      <View style={{paddingLeft: '5%'}}>
        {bodyItems?.map((item, key) => {
          return (
            <TouchableOpacity
              key={key}
              style={styles.subListItem}
              onPress={() => item.onPress()}>
              <Icon
                name={item.iconName}
                type={item.iconType}
                size={theme.text.s7}
                color={theme.accordionList.itemIcon}
              />
              <Text
                style={[
                  styles.label,
                  {fontSize: theme.text.s9, color: theme.accordionList.item},
                ]}>
                {item.itemLabel}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  return (
    <SafeAreaView>
      <View style={[styles.container, containerStyle]}>
        <AccordionList
          data={data}
          customIcon={() => (
            <Icon
              type={'Entypo'}
              name={'chevron-small-right'}
              color={theme.accordionList.titleIcon}
              size={theme.text.s4}
            />
          )}
          customTitle={item => renderTitle(item.title)}
          customBody={item =>
            type === 'list'
              ? renderListBody(item.body)
              : renderTextBody(item.body)
          }
          animationDuration={400}
          expandMultiple={true}
          containerItemStyle={{backgroundColor: theme.accordionList.background}}
        />
      </View>
    </SafeAreaView>
  );
};

export default AccordionItemList;
