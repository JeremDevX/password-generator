"use client";

export default function Strength() {
  return (
    <div className="bg-[var(--background)] py-4 px-6 flex items-center justify-between">
      <p className="text-[var(--light-gray)] font-semibold">STRENGTH</p>
      <div className="flex items-center gap-4">
        <p className="text-lg font-bold">MEDIUM</p>
        <div className="flex gap-1">
          <FilledSquare str="weak" />
          <FilledSquare str="medium" />
          <FilledSquare str="strong" />
          <FilledSquare />
        </div>
      </div>
    </div>
  );
}

function FilledSquare({ str }: { str?: string }) {
  if (!str) {
    return <div className="w-2 h-6 border border-foreground"></div>;
  }
  function getSquareBg(str: string): string {
    switch (str) {
      case "tooweak":
        return "bg-[var(--red)]";
      case "weak":
        return "bg-[var(--orange)]";
      case "medium":
        return "bg-[var(--yellow)]";
      case "strong":
        return "bg-[var(--green)]";
      default:
        return "bg-gray-500";
    }
  }

  return <div className={`w-2 h-6 ${getSquareBg(str)}`}></div>;
}
