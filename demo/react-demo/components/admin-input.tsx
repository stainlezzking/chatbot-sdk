import { useState } from "react";
import type { WidgetRef } from "../../../src/react/widget-component";
import type SupportWidget from "../../../src/widget";

const AdminInput = ({
  widget,
  type,
}: {
  widget: any;
  type: "ref" | "class";
}) => {
  const [adminMessage, setAdminMessage] = useState<string>("");

  const handleformSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminMessage.trim()) return;
    if (type == "class") widget?.sendMessage(adminMessage, { isAdmin: true });
    else widget.current?.sendMessage(adminMessage, { isAdmin: true });
    setAdminMessage("");
  };
  return (
    <form className="mt-4" onSubmit={handleformSubmit}>
      <input
        type="text"
        value={adminMessage}
        onChange={(e) => setAdminMessage(e.target.value)}
        placeholder="Send Message as admin..."
        className="rounded mx-auto border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </form>
  );
};

export default AdminInput;
