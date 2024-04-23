export type IColor = {
  primary: string;
  accent: string;
  hoverAccent: string;
  background: string;
  surface: string;
  shadow: string;
  fullColor: string;
  subColor: string;
  halfColor: string;
  helpColor: string;
  hoverColor: string;
  faintColor: string;
  info: string;
  success: string;
  error: string;
  warning: string;
  accentText: string;
  primaryText: string;
  opaqueSurface: string;
  timelineHeaderColor?: string;
  timelineHeaderTextColor?: string;
};

export const colors: IColor = {
  primary: '#2f95dc',
  accent: '#ffa00c',
  hoverAccent: '#ffa00c10',
  background: '#F5F5F5',
  surface: '#FFFFFF',
  shadow: '#00000015',
  fullColor: '#000000',
  subColor: '#00000075',
  halfColor: '#00000050',
  helpColor: '#00000025',
  hoverColor: '#00000010',
  faintColor: '#00000005',
  info: '#1D89CC',
  success: '#00C07F',
  error: '#FF5248',
  warning: '#FCC325',
  accentText: '#fff',
  primaryText: '#fff',
  opaqueSurface: '#f5f5f5cc',
};

export const darkColors: IColor = {
  primary: '#1a73e8',
  accent: '#ff6d00',
  hoverAccent: '#ff6d0010',
  background: '#121212',
  surface: '#1f1f1f',
  shadow: '#00000015',
  fullColor: '#ffffff',
  subColor: '#ffffff75',
  halfColor: '#ffffff50',
  helpColor: '#ffffff25',
  hoverColor: '#ffffff10',
  faintColor: '#ffffff05',
  info: '#1D89CC',
  success: '#00C07F',
  error: '#FF5248',
  warning: '#FCC325',
  accentText: '#000',
  primaryText: '#000',
  opaqueSurface: '#1f1f1fcc',
};
