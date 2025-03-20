"use client";

import { Dispatch, useState } from "react";

export default function Slider({ setLength }: { setLength: Dispatch<number> }) {
  const [passLength, setPassLength] = useState<number>(10);
  const percent = ((passLength - 5) / 20) * 100;

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLength = parseInt(e.target.value);
    setPassLength(newLength);
    setLength(newLength);
  };

  return (
    <div className="flex flex-col">
      <div>
        <label
          htmlFor="password-length"
          className="flex items-center justify-between w-full"
        >
          <span className="font-semibold">Character Length</span>
          <span className="text-3xl font-bold text-[var(--green)]">
            {passLength}
          </span>
        </label>
      </div>
      <input
        id="password-length"
        name="password-length"
        type="range"
        min={5}
        max={25}
        value={passLength}
        onChange={handleRangeChange}
        style={{
          background: `linear-gradient(to right, var(--green) ${percent}%, var(--background) ${percent}%)`,
        }}
      />
    </div>
  );
}
