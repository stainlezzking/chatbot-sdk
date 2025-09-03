import type { AdminUser, InitConfig, sendMessageMetaData } from "./modules/types.js";
export default class SupportWidget {
    #private;
    addEventListener(type: string, listener: EventListener): void;
    removeEventListener(type: string, listener: EventListener): void;
    dispatchEvent(event: Event): void;
    private elements;
    constructor();
    init(apiKey: string, config?: Partial<InitConfig>): this;
    open(): this;
    sendMessage(text: string, metadata: sendMessageMetaData): void;
    close(): this;
    toggle(): this;
    destroy(): this;
    setUser(userInfo: AdminUser): void;
    updateUnreadCount(count: number): this;
    private createButton;
    private createIframe;
    private applyButtonStyles;
    private applyWrapperStyles;
    private sendToIframe;
    private attachEventListeners;
    private widgetOpenedCallback;
    private widgetCloseCallback;
}
//# sourceMappingURL=app.d.ts.map