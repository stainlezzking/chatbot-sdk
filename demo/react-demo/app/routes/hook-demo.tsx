import type { Route } from "./+types/home.js";
import { useWidget } from "../../../../src/react/useWidget.js";
import { useState } from "react";
import AdminInput from "components/admin-input.js";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Chat Bot SDK demo" }];
}

export default function Home() {
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
    <>
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="space-y-2 text-center">
          <Link to="/" className="underline text-blue-950">
            View Component Demo
          </Link>
          <h1 className="font-bold text-2xl sm:text-3xl md:text-5xl">
            CHUKWUEBUKA AZUKA
          </h1>
          <p className="text-gray-400">use Hook Demo</p>

          <AdminInput widget={widget} type="class" />
        </div>
      </div>
    </>
  );
}
