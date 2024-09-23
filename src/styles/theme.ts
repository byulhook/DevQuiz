const colors = {
  primaryGradient: 'linear-gradient(90deg, #3f51b5 0%, #5c6bc0 100%)',
  primary: '#3f51b5',
  primaryHover: '#5c6bc0',
  black: '#1E293B', // 블랙, 중간 블랙
  blackDark: '#161E2E', // 블랙, 진한 블랙
  white: '#FFFFFF',
  red: '#F65063', // 빨간색
  redWarning: '#E54646', // 경고 빨간색
  gray700: '#4B5563',
  gray600: '#6B7280',
  gray500: '#9CA3AF',
  gray400: '#D1D5DB',
  gray300: '#E5E7EB',
  gray200: '#F4F5F7',
  gray100: '#F9FAFB',
  gray0: '#F3F4F6',
};

const fontSizes = {
  micro: '12px',
  small: '14px',
  base: '16px',
  medium: '18px',
  large: '20px',
  titleLarge: '42px',
};

const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
};

const width = {
  siderbarWidth: '64px',
  max: '600px',
  large: '500px',
};

const zIndex = {
  base: 1,
  videoPlayer: 10,
  header: 100,
  modal: 1000,
  toast: 10000,
};

const shadows = {
  sm: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', // 작은 그림자
  md: '0 3px 6px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.12)', // 중간 그림자
  lg: '0 10px 20px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.10)', // 큰 그림자
};

export type ColorsType = typeof colors;
export type FontSizeType = typeof fontSizes;
export type WidthType = typeof width;
export type ZIndexType = typeof zIndex;
export type FontWeightType = typeof fontWeights;
export type ShadowsType = typeof shadows;

interface Theme {
  colors: ColorsType;
  fontSizes: FontSizeType;
  fontWeights: FontWeightType;
  width: WidthType;
  zIndex: ZIndexType;
  shadows: ShadowsType;
}

const theme: Theme = {
  colors,
  fontSizes,
  fontWeights,
  width,
  zIndex,
  shadows,
};

export default theme;
