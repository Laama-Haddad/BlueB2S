import {StyleProp} from 'react-native';

export interface AccordionListBody {
  iconName: string;
  iconType: string;
  itemLabel: string;
  onPress: () => void;
}
export interface AccordionItem {
  id: number;
  title: string;
  body: string | AccordionListBody[];
}
export interface AccordionItemListProps {
  data: AccordionItem[];
  type: 'list' | 'text';
  containerStyle?: StyleProp<any> | StyleProp<any>[];
}
