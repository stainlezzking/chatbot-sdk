import { useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import SupportWidget from "../app.js";
import { CUSTEVENTS } from "../modules/constants.js";
import type { InitConfig } from "../modules/types.js";

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

const SupportWidgetComponent = forwardRef<WidgetRef, WidgetProps>(
  (
    {
      apiKey,
      position = "bottom-right",
      buttonColor,
      theme = "light",
      welcomeMessage,
      autoOpen = false,
      onWidgetOpened,
      onWidgetClosed,
      onNewMessage,
    },
    ref
  ) => {
    const widgetRef = useRef<SupportWidget | null>(null);

    useEffect(() => {
      const widget = new SupportWidget().init(apiKey, {
        position,
        buttonColor,
        theme,
        welcomeMessage,
        autoOpen,
      } as Partial<InitConfig>);

      widget.addEventListener(CUSTEVENTS.WIDGETOPEN, () => {
        onWidgetOpened?.();
      });
      widget.addEventListener(CUSTEVENTS.WIDGETCLOSE, () => {
        onWidgetClosed?.();
      });
      widget.addEventListener(CUSTEVENTS.NEWMESSGE, (e) => {
        onNewMessage?.(e);
      });

      widgetRef.current = widget;

      return () => {
        widget.destroy();
        widgetRef.current = null;
      };
    }, []);

    useImperativeHandle(ref, () => ({
      open: () => widgetRef.current?.open(),
      close: () => widgetRef.current?.close(),
      toggle: () => widgetRef.current?.toggle(),
      destroy: () => widgetRef.current?.destroy(),
      sendMessage: (text, metadata) =>
        widgetRef.current?.sendMessage(text, metadata),
      setUser: (user) => widgetRef.current?.setUser(user),
    }));

    return null;
  }
);

export default SupportWidgetComponent;
