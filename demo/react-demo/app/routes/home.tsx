import type { Route } from "./+types/home.js";
import SupportWidgetComponent, {
  type WidgetRef,
} from "../../../../src/react/widget-component.js";
import { useRef } from "react";
import AdminInput from "components/admin-input.js";
import { Link } from "react-router";

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
        <div className="space-y-2 text-center">
          <Link to="/alt" className="underline text-blue-950">
            View Use Hook Demo
          </Link>

          <h1 className="font-bold text-2xl sm:text-3xl md:text-5xl">
            CHUKWUEBUKA AZUKA
          </h1>
          <p className="text-gray-400">Component Demo</p>
          <AdminInput widget={widgetRef} type="ref" />
        </div>
        <SupportWidgetComponent
          ref={widgetRef}
          apiKey="demo-key"
          position="bottom-right"
          buttonColor="green"
          welcomeMessage="Hi! How can we help?"
          theme="dark"
          onNewMessage={handleNewMessage}
        />
      </div>
    </>
  );
}
