import SupportWidget from "../widget.js";
interface WidgetOptions {
    position?: string;
    buttonColor?: string;
    theme?: "light" | "dark";
    welcomeMessage?: string;
    autoOpen?: boolean;
    onWidgetOpened?: () => void;
    onWidgetClosed?: () => void;
    onNewMessage?: (message: any) => void;
}
export declare const useWidget: (apiKey: string, options?: WidgetOptions) => SupportWidget | null;
export {};
//# sourceMappingURL=useWidget.d.ts.map