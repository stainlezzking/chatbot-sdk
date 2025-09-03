export interface WidgetProps {
    apiKey: string;
    position?: string;
    buttonColor?: string;
    theme?: "light" | "dark";
    welcomeMessage?: string;
    autoOpen?: boolean;
    onWidgetOpened?: () => void;
    onWidgetClosed?: () => void;
    onNewMessage?: (message: any) => void;
}
export interface WidgetRef {
    open: () => void;
    close: () => void;
    toggle: () => void;
    destroy: () => void;
    sendMessage: (text: string, metadata?: any) => void;
    setUser: (user: any) => void;
}
declare const SupportWidgetComponent: import("react").ForwardRefExoticComponent<WidgetProps & import("react").RefAttributes<WidgetRef>>;
export default SupportWidgetComponent;
//# sourceMappingURL=widget.d.ts.map