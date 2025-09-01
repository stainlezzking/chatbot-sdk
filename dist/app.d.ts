import type { AdminUser, InitConfig } from "./modules/types.js";
export default class SupportWidget {
    private state;
    private iframeSrc;
    private eventsTracker;
    private elements;
    constructor();
    init(apiKey: string, config?: Partial<InitConfig>): this;
    open(): void;
    close(): void;
    toggle(): void;
    destroy(): this | undefined;
    setUser(userInfo: AdminUser): void;
    updateUnreadCount(count: string): this;
    private createButton;
    private createIframe;
    private applyButtonStyles;
    private applyWrapperStyles;
}
//# sourceMappingURL=app.d.ts.map