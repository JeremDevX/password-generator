import { ArrowRight, Check } from "lucide-react";
import Slider from "../Slider/Slider";
import Strength from "../Strength/Strength";

export default function PasswordForm() {
  return (
    <div className="flex flex-col bg-[var(--dark-gray)] p-6 h-126 w-full justify-between">
      <Slider />
      <ul className="flex flex-col gap-4">
        <ul>
          <li className="flex items-center gap-2">
            <label
              htmlFor="uppercase"
              className="relative flex items-center gap-4 cursor-pointer font-bold"
            >
              <input
                type="checkbox"
                name="uppercase"
                id="uppercase"
                className="w-5 h-5 appearance-none border border-[var(--green)] bg-[var(--dark-gray)] 
                   checked:bg-[var(--green)] checked:border-[var(--green)] cursor-pointer relative"
              />
              <span className="absolute inset-0 left-0.5 flex items-center text-[var(--dark-gray)]">
                <Check size={16} />
              </span>
              Include UpperCase Letters
            </label>
          </li>
        </ul>
        <li className="flex items-center gap-2">
          <label
            htmlFor="lowercase"
            className="relative flex items-center gap-4 cursor-pointer font-bold"
          >
            <input
              type="checkbox"
              name="lowercase"
              id="lowercase"
              className="w-5 h-5 appearance-none border border-[var(--green)] bg-[var(--dark-gray)] 
                   checked:bg-[var(--green)] checked:border-[var(--green)] cursor-pointer relative"
            />
            <span className="absolute inset-0 left-0.5 flex items-center text-[var(--dark-gray)]">
              <Check size={16} />
            </span>
            Include Lowercase Letters
          </label>
        </li>
        <li className="flex items-center gap-2">
          <label
            htmlFor="numbers"
            className="relative flex items-center gap-4 cursor-pointer font-bold"
          >
            <input
              type="checkbox"
              name="numbers"
              id="numbers"
              className="w-5 h-5 appearance-none border border-[var(--green)] bg-[var(--dark-gray)] 
                   checked:bg-[var(--green)] checked:border-[var(--green)] cursor-pointer relative"
            />
            <span className="absolute inset-0 left-0.5 flex items-center text-[var(--dark-gray)]">
              <Check size={16} />
            </span>
            Includes Numbers
          </label>
        </li>
        <li className="flex items-center gap-2">
          <label
            htmlFor="symbols"
            className="relative flex items-center gap-4 cursor-pointer font-bold"
          >
            <input
              type="checkbox"
              name="symbols"
              id="symbols"
              className="w-5 h-5 appearance-none border border-[var(--green)] bg-[var(--dark-gray)] 
                   checked:bg-[var(--green)] checked:border-[var(--green)] cursor-pointer relative"
            />
            <span className="absolute inset-0 left-0.5 flex items-center text-[var(--dark-gray)]">
              <Check size={16} />
            </span>
            Includes Symbols
          </label>
        </li>
      </ul>
      <Strength />
      <button className="bg-[var(--green)] text-black w-full mx-auto p-4 flex justify-center items-center gap-4 font-semibold hover:text-[var(--green)] hover:bg-[var(--dark-gray)] hover:border hover:border-[var(--green)] cursor-pointer">
        GENERATE <ArrowRight />
      </button>
    </div>
  );
}
