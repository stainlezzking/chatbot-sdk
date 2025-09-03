import type { Route } from "./+types/home";
import SupportWidgetComponent, {
  type WidgetRef,
} from "../../../../src/react/widget";
import { useRef } from "react";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Chat Bot SDK demo" }];
}

export default function Home() {
  const widgetRef = useRef<WidgetRef>(null);

  const handleNewMessage = (e: any) => {
    console.log("New message received", e);
  };

  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-5xl">
          CHUKWUEBUKA AZUKA
        </h1>
      </div>
      <SupportWidgetComponent
        ref={widgetRef}
        apiKey="demo-key"
        position="bottom-right"
        buttonColor="#007bff"
        welcomeMessage="Hi! How can we help?"
        theme="dark"
        onNewMessage={handleNewMessage}
      />
    </>
  );
}
