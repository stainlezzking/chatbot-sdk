import { useRef, useEffect } from "react";
import SupportWidget from "../app.js";
import { CUSTEVENTS } from "../modules/constants.js";

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

export const useWidget = (apiKey: string, options?: WidgetOptions) => {
  const widgetRef = useRef<SupportWidget | null>(null);

  useEffect(() => {
    const widget = new SupportWidget().init(apiKey, options);
    widgetRef.current = widget;

    if (options?.onWidgetOpened)
      widget.addEventListener(CUSTEVENTS.WIDGETOPEN, options.onWidgetOpened);
    if (options?.onWidgetClosed)
      widget.addEventListener(CUSTEVENTS.WIDGETCLOSE, options.onWidgetClosed);
    if (options?.onNewMessage)
      widget.addEventListener(CUSTEVENTS.NEWMESSGE, options.onNewMessage);

    return () => {
      widget.destroy();
      widgetRef.current = null;
    };
  }, [apiKey]);

  return widgetRef.current;
};
