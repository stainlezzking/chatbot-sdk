import { THEMESTYLES } from "./constants.js";

type ThemeType = typeof THEMESTYLES.LIGHT | typeof THEMESTYLES.DARK;

type InitConfig = {
  position: string;
  buttonColor: string;
  theme: string;
  welcomeMessage: string;
  autoOpen: boolean;
};
export type AppStateType = {
  open: boolean;
  loading: boolean;
  theme: ThemeType;
};

export type InitType = {
  apiKey: string;
  config: Partial<InitConfig>;
};
