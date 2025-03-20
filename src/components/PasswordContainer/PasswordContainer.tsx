import { Files } from "lucide-react";

export default function PasswordContainer() {
  return (
    <div className="bg-[var(--dark-gray)] w-full p-4 flex items-center justify-between">
      Password container <Files style={{ color: "var(--green)" }} />
    </div>
  );
}
