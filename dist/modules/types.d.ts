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
    open: boolean;
    loading: boolean;
    theme: ThemeType;
    isInitialized: boolean;
};
export type AdminUser = {
    name: string;
};
export type ElementsTypes = {
    unreadCountElement: HTMLSpanElement | null;
    iframeWrapper: HTMLDivElement | null;
};
export type eventTrack = {
    element: HTMLElement;
    event: string;
    callback: () => void;
};
//# sourceMappingURL=types.d.ts.map