"use client";

import { useState } from "react";
import PasswordContainer from "@/components/PasswordContainer/PasswordContainer";
import PasswordForm from "@/components/PasswordForm/PasswordForm";

export interface PasswordOptions {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  specialCharacters: boolean;
}

export default function Home() {
  const [passwordOptions, setPasswordOptions] = useState({
    length: 10,
    uppercase: false,
    lowercase: false,
    numbers: false,
    specialCharacters: false,
  });
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const { length, uppercase, lowercase, numbers, specialCharacters } =
      passwordOptions;
    let characters = "";
    let newPassword = "";

    if (uppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) characters += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) characters += "0123456789";
    if (specialCharacters) characters += "!@#$%^&*()_-+=<>?/";

    for (let i = 0; i < length; i++) {
      newPassword += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    setPassword(newPassword || "Select at least one option");
  };

  function calculatePasswordStrength(password: string): number {
    if (
      password.length === 0 ||
      password === "Click to generate" ||
      password === "Select at least one option"
    )
      return 0;

    let charsetSize = 0;
    if (/[a-z]/.test(password)) charsetSize += 26;
    if (/[A-Z]/.test(password)) charsetSize += 26;
    if (/[0-9]/.test(password)) charsetSize += 10;
    if (/[^a-zA-Z0-9]/.test(password)) charsetSize += 30;

    if (charsetSize === 0) return 0;

    let entropy = Math.log2(Math.pow(charsetSize, password.length));

    const uniqueChars = new Set(password).size;
    const uniquenessFactor = uniqueChars / password.length;
    entropy *= uniquenessFactor;

    return Math.round(entropy);
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 px-4">
      <section className="flex flex-col items-center justify-center gap-4 max-w-142 w-full mx-auto">
        <h1 className="text-2xl font-bold">Password generator</h1>
        <PasswordContainer password={password} />
        <PasswordForm
          setOptions={setPasswordOptions}
          generatePassword={generatePassword}
          passwordStrength={calculatePasswordStrength(password)}
        />
      </section>
    </main>
  );
}
