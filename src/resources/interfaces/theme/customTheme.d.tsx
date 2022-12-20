//import the object theme you created
import {CustomTheme} from './customTheme';
declare module '@react-navigation/native' {
  export type CustomThemeType = CustomTheme;
  export function useTheme(): CustomThemeType;
}
