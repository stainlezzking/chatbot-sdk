import { THEMESTYLES } from "./constants.js";

export type ThemeType = typeof THEMESTYLES.LIGHT | typeof THEMESTYLES.DARK;

export type InitConfig = {
  position: string;
  buttonColor: string;
  theme: string;
  welcomeMessage: string;
  autoOpen: boolean;
};
export type AppStateType = {
  isOpen: boolean;
  loading: boolean;
  theme: ThemeType;
  isInitialized: boolean;
  count: number;
};

export type AdminUser = {
  name: string;
  isOnline: boolean;
};

export type ElementsTypes = {
  unreadCountElement: HTMLSpanElement | null;
  iframeWrapper: HTMLDivElement | null;
  buttonElement: HTMLButtonElement | null;
  iframe: HTMLIFrameElement | null;
  wrapper: HTMLDivElement | null;
};

export type eventTrack = {
  element: HTMLElement;
  event: string;
  callback: () => void;
};

export type IframeMessges =
  | "theme"
  | "new-message"
  | "send-message"
  | "set-user";

export type sendMessageMetaData = {
  isAdmin: boolean;
};
