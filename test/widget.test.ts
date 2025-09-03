// tests/widget.test.ts
import { describe, it, beforeEach, expect, vi } from "vitest";
import SupportWidget from "../src/widget.js";

describe("SupportWidget", () => {
  let widget: SupportWidget;

  beforeEach(() => {
    document.body.innerHTML = ""; // reset DOM
    widget = new SupportWidget();
  });

  it("should not initialize twice", () => {
    widget.init("fake-key");
    const firstWrapper = document.querySelector("div");
    widget.init("fake-key");
    const wrappers = document.querySelectorAll("div");
    expect(wrappers.length).toBe(2);
    expect(firstWrapper).toBe(wrappers[0]);
  });

  it("should create wrapper, button, and iframe on init", () => {
    widget.init("fake-key", { position: "bottom-right" });
    expect(document.querySelector("iframe")).toBeTruthy();
    expect(document.querySelector("button")).toBeTruthy();
  });

  // Cannot assess the private state so I will just use the event listeners to track if it was fired (applied below)
  //   it("should autoOpen the widget if config.autoOpen is true", () => {
  //     widget.init("fake-key", { autoOpen: true });
  //     // internal state check via open()
  //     widget.open();
  //     expect(widget["#state"]?.isOpen).toBe(true);
  //   });

  //   it("should toggle between open and close", () => {
  //     widget.init("fake-key");
  //     widget.open();
  //     expect(widget["#state"]?.isOpen).toBe(true);
  //     widget.toggle();
  //     expect(widget["#state"]?.isOpen).toBe(false);
  //   });

  //   it("should destroy the widget and reset state", () => {
  //     widget.init("fake-key");
  //     widget.destroy();
  //     expect(document.querySelector("iframe")).toBeNull();
  //     expect(widget["#state"]?.isInitialized).toBe(false);
  //   });

  it("should update unread message counter", () => {
    widget.init("fake-key");
    widget.updateUnreadCount(3);
    const span = document.querySelector("span");
    expect(span?.textContent).toBe("3");
    expect(span?.style.display).toBe("flex");
  });

  it("should hide unread counter when count is 0", () => {
    widget.init("fake-key");
    widget.updateUnreadCount(0);
    const span = document.querySelector("span");
    expect(span?.style.display).toBe("none");
  });

  it("should send a message via iframe postMessage", () => {
    widget.init("fake-key");
    const mockPost = vi.fn();
    widget["elements"].iframe = {
      contentWindow: { postMessage: mockPost },
    } as any;

    widget.sendMessage("Hello", { isAdmin: false });
    expect(mockPost).toHaveBeenCalledWith(
      { type: "send-message", payload: { message: "Hello", isAdmin: false } },
      "*"
    );
  });

  it("should not send empty messages", () => {
    widget.init("fake-key");
    const mockPost = vi.fn();
    widget["elements"].iframe = {
      contentWindow: { postMessage: mockPost },
    } as any;

    widget.sendMessage("   ", { isAdmin: false });
    expect(mockPost).not.toHaveBeenCalled();
  });

  it("should dispatch events on open/close", () => {
    const openSpy = vi.fn();
    const closeSpy = vi.fn();

    widget.addEventListener("widget-open", openSpy);
    widget.addEventListener("widget-close", closeSpy);

    widget.init("fake-key");
    widget.open();
    widget.close();

    expect(openSpy).toHaveBeenCalled();
    expect(closeSpy).toHaveBeenCalled();
  });
});
