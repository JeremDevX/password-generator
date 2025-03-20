"use client";
import { Files, Check } from "lucide-react";
import { useState } from "react";

export default function PasswordContainer({ password }: { password: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopyPassword = async () => {
    if (!password) return;

    try {
      await navigator.clipboard.writeText(password);
    } catch (err) {
      const textarea = document.createElement("textarea");
      textarea.value = password;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="bg-[var(--dark-gray)] w-full p-4 flex items-center justify-between">
      <span className="md:text-xl font-bold">
        {password || "Click to generate"}
      </span>
      <button onClick={handleCopyPassword} className="cursor-pointer">
        {copied ? (
          <p className="flex items-center gap-2 font-bold text-[var(--green)]">
            <span>COPIED</span> <Check style={{ color: "var(--green)" }} />
          </p>
        ) : (
          <Files style={{ color: "var(--green)" }} />
        )}
      </button>
    </div>
  );
}
