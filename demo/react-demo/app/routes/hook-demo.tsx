import type { Route } from "./+types/home";
import { useWidget } from "../../../../src/react/useWidget";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Chat Bot SDK demo" }];
}

export default function Home() {
  const handleNewMessage = (e: any) => {
    console.log("New message received", e);
  };
  const [adminMessage, setAdminMessage] = useState<string>("");

  const widget = useWidget("demo-key", {
    position: "bottom-right",
    buttonColor: "black",
    theme: "light",
    welcomeMessage: "Hi! How can we help?",
    onNewMessage: handleNewMessage,
  });

  const handleformSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminMessage.trim()) return;
    widget?.sendMessage(adminMessage, { isAdmin: true });
    setAdminMessage("");
  };
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="space-y-2 text-center">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-5xl">
            CHUKWUEBUKA AZUKA
          </h1>
          <p className="text-gray-400">use Hook Demo</p>
          <form className="mt-4" onSubmit={handleformSubmit}>
            <input
              type="text"
              value={adminMessage}
              onChange={(e) => setAdminMessage(e.target.value)}
              placeholder="Send Message as admin..."
              className="rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </form>
        </div>
      </div>
    </>
  );
}
