"use client";

import { useState } from "react";

export default function Slider() {
  const [passLength, setPassLength] = useState<number>(10);
  const percent = ((passLength - 0) / (25 - 0)) * 100;

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassLength(parseInt(e.target.value));
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
        min={0}
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
