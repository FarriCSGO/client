export interface IColor {
  primary: string;
  onPrimary: string;
  onPrimary2: string;
  background: string;
  background2: string;
  onBackground: string;
  surface: string;
  surface2: string;
  onSurface: string;
  hoverSurface: string;
  text: string;
  textFaint: string;
}

export interface IScreen {
  medium: string;
  small: string;
}

export interface ITheme {
  name: string;
  color: IColor;
  screen: IScreen;
}
