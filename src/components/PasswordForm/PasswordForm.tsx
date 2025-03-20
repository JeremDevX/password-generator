"use client";

import { ArrowRight, Check } from "lucide-react";
import Slider from "../Slider/Slider";
import Strength from "../Strength/Strength";
import { Dispatch, SetStateAction } from "react";
import { PasswordOptions } from "@/app/page";

export default function PasswordForm({
  setOptions,
  generatePassword,
  passwordStrength,
}: {
  setOptions: Dispatch<SetStateAction<PasswordOptions>>;
  generatePassword: () => void;
  passwordStrength: number;
}) {
  return (
    <div className="flex flex-col bg-[var(--dark-gray)] p-6 h-120 w-full justify-between">
      <Slider
        setLength={(newLength: number) =>
          setOptions((prevOptions) => ({
            ...prevOptions,
            length: newLength,
          }))
        }
      />
      <ul className="flex flex-col gap-4">
        <OptionLine
          id="uppercase"
          name="Includes UpperCase Letters"
          setValue={(newValue: boolean) =>
            setOptions((prevOptions) => ({
              ...prevOptions,
              uppercase: newValue,
            }))
          }
        />
        <OptionLine
          id="lowercase"
          name="Includes Lowercase Letters"
          setValue={(newValue: boolean) =>
            setOptions((prevOptions) => ({
              ...prevOptions,
              lowercase: newValue,
            }))
          }
        />
        <OptionLine
          id="numbers"
          name="Includes Numbers"
          setValue={(newValue: boolean) =>
            setOptions((prevOptions) => ({
              ...prevOptions,
              numbers: newValue,
            }))
          }
        />
        <OptionLine
          id="specialCharacters"
          name="Includes Symbols"
          setValue={(newValue: boolean) =>
            setOptions((prevOptions) => ({
              ...prevOptions,
              specialCharacters: newValue,
            }))
          }
        />
      </ul>
      <Strength strength={passwordStrength} />
      <button
        className="bg-[var(--green)] text-black w-full mx-auto p-4 flex justify-center items-center gap-4 font-semibold hover:text-[var(--green)] hover:bg-[var(--dark-gray)] border border-[var(--green)] cursor-pointer"
        onClick={generatePassword}
      >
        GENERATE <ArrowRight />
      </button>
    </div>
  );
}

function OptionLine({
  id,
  name,
  setValue,
}: {
  id: string;
  name: string;
  setValue: Dispatch<boolean>;
}) {
  return (
    <li className="flex items-center gap-2">
      <label
        htmlFor={id}
        className="relative flex items-center gap-4 cursor-pointer font-bold"
      >
        <input
          type="checkbox"
          name={id}
          id={id}
          className="w-5 h-5 appearance-none border border-[var(--green)] bg-[var(--dark-gray)] 
                 checked:bg-[var(--green)] checked:border-[var(--green)] cursor-pointer relative"
          onChange={(e) => {
            const newValue = e.target.checked;
            setValue(newValue);
          }}
        />
        <span className="absolute inset-0 left-0.5 flex items-center text-[var(--dark-gray)]">
          <Check size={16} />
        </span>
        {name}
      </label>
    </li>
  );
}
