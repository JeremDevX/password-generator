import { ArrowRight } from "lucide-react";
import Slider from "../Slider/Slider";
import Strength from "../Strength/Strength";

export default function PasswordForm() {
  return (
    <div className="flex flex-col  bg-[var(--dark-gray)] p-4 h-126 w-full">
      <Slider />
      <ul>
        <li>Include UpperCase Letters</li>
        <li>Include Lowercase Letters</li>
        <li>Includes Numbers</li>
        <li>Includes Symbols</li>
      </ul>
      <Strength />
      <button className="bg-[var(--green)] text-black w-11/12 mx-auto p-4 flex justify-center items-center gap-4 font-semibold">
        GENERATE <ArrowRight />
      </button>
    </div>
  );
}
