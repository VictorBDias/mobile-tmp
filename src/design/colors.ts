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
  primary: '#1D89CE',
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
