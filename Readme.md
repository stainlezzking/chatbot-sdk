# Customer Support Widget

A lightweight, embeddable customer support chat widget built with **vanilla JavaScript**.  
It can be added to any website with a single `<script>` tag and provides a simple API for customization, messaging, and event handling.

---

## 🚀 Features

- Floating, customizable chat button (position, color, theme, welcome message)
- Iframe-based chat interface
- Responsive and mobile-friendly design
- Clean API (`init`, `open`, `close`, `toggle`, `destroy`, etc.)
- Event system for reacting to widget actions
- PostMessage API for parent–iframe communication
- Unread message counter
- Browser notifications for new messages when the widget is closed

---

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/...
cd support-widget
npm install
```

```bash
npm run dev
```

# Support Widget SDK

A lightweight, customizable **chat support widget** that can be embedded in any application.

The widget works in:

- **Vanilla HTML/JavaScript** (via script integration)
- **React applications** (via hook or component syntax)

It provides a clean API for initializing, opening/closing, sending messages, handling events, and managing user state. Communication between the parent app and the embedded chat iframe is powered by **`postMessage`**, making it secure and flexible.

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/stainlezzking/chatbot-sdk.git
cd chatbot-sdk
npm install
```

---

## 🖥️ Running the Demo

### Vanilla HTML Demo

The demo page is served with Rollup and live-server, which runs on port 3000 and serves the built widget from the dist folder. This acts as the development server, monitoring source changes and applying them automatically
Start the demo server:

```bash
npm run dev
```

Then open (if not automatically opened):
👉 [http://localhost:3000/](http://localhost:3000/)

---

### React Demo

For the React integration example, go into the `react-demo` folder and run:

```bash
cd demo/react-demo
npm install
npm start
```

This runs the demo React app with the widget integrated via hooks and components.

---

## ⚙️ Development

### Run Development Server

To work on the widget with hot reload for both Rollup and Tailwind:

```bash
npm run dev
```

This runs:

- Rollup in watch mode
- TailwindCSS in watch mode (for both vanilla demo and React demo builds)

### Build for Production

To build the widget for production:

```bash
npm run build
```

Outputs are written into the `dist/` folder and also synced to the demo apps.

---

## 📂 Project Structure

```
widget-assessment/
├── README.md
├── package.json
├── src/
│   ├── widget.js                   # Core SDK (vanilla JS build)
│   ├── react/                      # React wrapper code
│   │   ├── widget-component.tsx    # React component
│   │   └── useWidget.ts            # Custom hook
│   ├── components/                 # Shared UI (if any)
│   └── styles/                     # CSS/Tailwind source
├── demo/
│   ├── index.html                  # Vanilla demo
│   ├── react-demo/                 # React demo
│   │   └── src/App.tsx
├── dist/                           # Rollup build output
├── tests/                          # Unit tests
```

---

## 📖 Usage

### 1. Vanilla HTML / JS

Include the widget in your HTML and initialize:

```html
<script type="module">
  import SupportWidget from "./dist/widget.js";

  const widget = new SupportWidget();
  widget.init("your-api-key", {
    theme: "dark",
    buttonColor: "#007bff",
    welcomeMessage: "Hello! How can we help you?",
    autoOpen: false,
    position: "bottom-right",
  });

  widget.addEventListener("new-message", (e) => {
    console.log("Received message:", e.detail);
  });
</script>
```

---

### 2. React (Hook Syntax)

```tsx
import React from "react";
import { useWidget } from "../src/react/useWidget";

export default function App() {
  const handleNewMessage = (e: any) => {
    console.log("New message received", e);
  };
  const widget = useWidget("demo-key", {
    position: "bottom-right",
    buttonColor: "black",
    theme: "light",
    welcomeMessage: "Hi! How can we help?",
    onNewMessage: handleNewMessage,
  });

  return (
    <div>
      <h1>React Demo</h1>
      <button onClick={() => widget.open()}>Open Widget</button>
    </div>
  );
}
```

---

### 3. React (Component Syntax)

```tsx
import SupportWidgetComponent, {
  type WidgetRef,
} from "../../../../src/react/widget-component.js";

export default function App() {
  const widgetRef = useRef<WidgetRef>(null);

  const handleNewMessage = (e: any) => {
    console.log("New message received", e);
  };

  return (
    <div>
      <h1>React Demo with Component</h1>
      <SupportWidgetComponent
        ref={widgetRef}
        apiKey="demo-key"
        position="bottom-right"
        buttonColor="#007bff"
        welcomeMessage="Hi! How can we help?"
        theme="dark"
        onNewMessage={handleNewMessage}
      />
    </div>
  );
}
```

---

## 🛠️ API Reference

### Initialization

```ts
widget.init(apiKey: string, config?: Partial<InitConfig>)
```

- **apiKey**: string – Your widget API key
- **config**: optional settings

  - `theme: "light" | "dark"`
  - `buttonColor: string` (hex or css color)
  - `welcomeMessage: string`
  - `autoOpen: boolean`
  - `position: "top-left" | "top-right" | "bottom-left" | "bottom-right"`

---

### Methods

| Method                        | Description                      |
| ----------------------------- | -------------------------------- |
| `open()`                      | Opens the widget                 |
| `close()`                     | Closes the widget                |
| `toggle()`                    | Toggles widget open/close        |
| `destroy()`                   | Removes widget from DOM          |
| `sendMessage(text, metadata)` | Sends a message to the iframe    |
| `setUser(userInfo)`           | Set the logged-in user in widget |
| `updateUnreadCount(count)`    | Update the unread message badge  |

---

### Events

Events are dispatched via `addEventListener`.

| Event          | Description                          |
| -------------- | ------------------------------------ |
| `widget-open`  | Triggered when widget is opened      |
| `widget-close` | Triggered when widget is closed      |
| `new-message`  | Triggered when a new message arrives |

Example:

```ts
widget.addEventListener("new-message", (event) => {
  console.log("Message received", event.detail);
});
```

---

## 🔌 Under the Hood

- **Iframe communication** is implemented using `window.postMessage` for sending messages between the parent application and the chatbox iframe.
- The widget dynamically injects DOM elements (`div`, `button`, `iframe`) and applies styles programmatically.
- Notifications (via the Web Notifications API) alert users of new messages when the widget is closed.
- Internal state management keeps track of `isOpen`, `theme`, `unreadCount`, and initialization status.

---

## ✅ Testing

Run unit tests:

```bash
npm test
```

---

## 📜 License

© 2025 Chukwuebuka Azuka
