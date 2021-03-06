export const themeColors = {
  bone: {
    50: '#f5f5e8',
    100: '#dfddd0',
    200: '#c7c6b6',
    300: '#b1b09b',
    400: '#9b997f',
    500: '#818065',
    600: '#64634e',
    700: '#484737',
    800: '#2b2b1e',
    900: '#0f0f00',
  },
  nightSky: {
    50: '#eaf2fc',
    100: '#cbd8e7',
    200: '#aabed4',
    300: '#88a4c3',
    400: '#678ab2',
    500: '#4e7198',
    600: '#3c5877',
    700: '#2b3f55',
    800: '#182634',
    900: '#030e15',
  },
  lime: {
    50: '#f5fedd',
    100: '#e7fab3',
    200: '#dcf586',
    300: '#d4f158',
    400: '#ceee2b',
    500: '#a7d411',
    600: '#77a509',
    700: '#4c7604',
    800: '#284700',
    900: '#0b1900',
  },
  emerald: {
    50: '#e0fcfa',
    100: '#bfedec',
    200: '#9ddfdd',
    300: '#79d3d0',
    400: '#55c6c2',
    500: '#3dada9',
    600: '#2c8683',
    700: '#1c605e',
    800: '#093b39',
    900: '#001515',
  },
  blue: {
    50: '#dbf6ff',
    100: '#afdfff',
    200: '#80c8fe',
    300: '#4fb2fa',
    400: '#219cf8',
    500: '#0782de',
    600: '#0065ae',
    700: '#00487d',
    800: '#002b4e',
    900: '#000f20',
  },
  red: {
    50: '#ffe2ec',
    100: '#ffb3c5',
    200: '#fc839f',
    300: '#f95278',
    400: '#f62252',
    500: '#dd0939',
    600: '#ad032c',
    700: '#7c001e',
    800: '#4d0012',
    900: '#200005',
  },
  orange: {
    50: '#fff6db',
    100: '#ffe4af',
    200: '#ffd27f',
    300: '#ffc04d',
    400: '#ffaf1d',
    500: '#e69505',
    600: '#b37400',
    700: '#805300',
    800: '#4e3200',
    900: '#1e1000',
  },
};

const baseThemeColors = {
  primary: {
    50: themeColors.bone[50],
    100: themeColors.bone[100],
    200: themeColors.bone[200],
    300: themeColors.bone[300],
    400: themeColors.bone[400],
    500: themeColors.bone[500],
    600: themeColors.bone[600],
    700: themeColors.bone[700],
    800: themeColors.bone[800],
    900: themeColors.bone[900],
  },
  background: {
    50: themeColors.nightSky[50],
    100: themeColors.nightSky[100],
    200: themeColors.nightSky[200],
    300: themeColors.nightSky[300],
    400: themeColors.nightSky[400],
    500: themeColors.nightSky[500],
    600: themeColors.nightSky[600],
    700: themeColors.nightSky[700],
    800: themeColors.nightSky[800],
    900: themeColors.nightSky[900],
  },
  brand: {
    50: themeColors.blue[50],
    100: themeColors.blue[100],
    200: themeColors.blue[200],
    300: themeColors.blue[300],
    400: themeColors.blue[400],
    500: themeColors.blue[500],
    600: themeColors.blue[600],
    700: themeColors.blue[700],
    800: themeColors.blue[800],
    900: themeColors.blue[900],
  },
  alt: {
    50: themeColors.orange[50],
    100: themeColors.orange[100],
    200: themeColors.orange[200],
    300: themeColors.orange[300],
    400: themeColors.orange[400],
    500: themeColors.orange[500],
    600: themeColors.orange[600],
    700: themeColors.orange[700],
    800: themeColors.orange[800],
    900: themeColors.orange[900],
  },
  accent: {
    50: themeColors.lime[50],
    100: themeColors.lime[100],
    200: themeColors.lime[200],
    300: themeColors.lime[300],
    400: themeColors.lime[400],
    500: themeColors.lime[500],
    600: themeColors.lime[600],
    700: themeColors.lime[700],
    800: themeColors.lime[800],
    900: themeColors.lime[900],
  },
};

export type ThemeSizeOptionsExpanded = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type ThemeSizeOptions = 'sm' | 'md' | 'lg';

export const baseTheme = {
  colors: {
    bg: {
      base: baseThemeColors.background[100],
      light: baseThemeColors.background[50],
      dark: baseThemeColors.background[200],
    },
    white: {
      base: baseThemeColors.background[50],
      light: baseThemeColors.background[100],
      dark: baseThemeColors.background[200],
    },
    primary: {
      base: baseThemeColors.primary[800],
      light: baseThemeColors.primary[700],
      dark: baseThemeColors.primary[900],
    },
    accent: {
      base: baseThemeColors.accent[500],
      light: baseThemeColors.accent[400],
      dark: baseThemeColors.accent[600],
    },
    alt: {
      base: baseThemeColors.alt[500],
      light: baseThemeColors.alt[400],
      dark: baseThemeColors.alt[600],
    },
    brand: {
      base: baseThemeColors.brand[500],
      light: baseThemeColors.brand[400],
      dark: baseThemeColors.brand[600],
    },
    success: {
      base: themeColors.emerald[500],
      light: themeColors.emerald[400],
      dark: themeColors.emerald[600],
    },
    error: {
      base: themeColors.red[500],
      light: themeColors.red[400],
      dark: themeColors.red[600],
    },
  },
  space: {
    sm: '2px',
    md: '8px',
    lg: '12px',
  },
  radius: {
    sm: '2px',
    md: '4px',
    lg: '8px',
  },
  opacity: {
    sm: '2px',
    md: '4px',
    lg: '8px',
  },
  fontSizes: {
    xxs: '4px',
    xs: '8px',
    sm: '12px',
    md: '14px',
    lg: '16px',
    xl: '20px',
    xxl: '24px',
  },
  headingSizes: {
    xxs: '20px',
    xs: '24px',
    sm: '32px',
    md: '48px',
    lg: '64px',
    xl: '96px',
    xxl: '128px',
  },
};
