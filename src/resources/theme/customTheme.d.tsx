//import the object theme you created
import theme from './lightTheme';

type CustomThemeD = typeof theme;

declare module '@react-navigation/native' {
  export interface DefaultTheme extends CustomThemeD {}

  export function useTheme(): CustomThemeD;

  // export interface NavigationContainer {
  //   theme?: CustomThemeD;
  // }
}
// declare module '@react-navigation/native' {
//   export type ExtendedTheme = typeof theme
//   export function useTheme(): ExtendedTheme;
