export interface Theme {
  primary: string;
  secondary: string;
  info: string;
  homeBackground: string;
  fonts: {
    regular: string;
    semi_bold: string;
    bold: string;
  };
  text: {
    textPrimary: string;
    dark: string;
    light: string;
    placeholder: string;
    border: string;
    borderFocus: string;
    lightGreen: string;
    grey: string;
    black: string;
    s1: number;
    s2: number;
    s3: number;
    s4: number;
    s5: number;
    s6: number;
    s7: number;
    s8: number;
    s85: number;
    s89: number;
    s9: number;
    s10: number;
    s11: number;
    s12: number;
  };
  icon: {
    background: string;
    icon: string;
    label: string;
  };
  header: {
    background: string;
    title: string;
  };
}
