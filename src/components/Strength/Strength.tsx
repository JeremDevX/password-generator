"use client";

export default function Strength({ strength }: { strength: number }) {
  let filledSquares = 0;
  let strengthNum = "";
  let strengthString = "";

  if (strength === 0) {
    strengthNum = "";
    strengthString = "";
    filledSquares = 0;
  } else if (strength <= 35) {
    strengthNum = "tooweak";
    strengthString = "TOO WEAK";
    filledSquares = 1;
  } else if (strength <= 60) {
    strengthNum = "weak";
    strengthString = "WEAK";
    filledSquares = 2;
  } else if (strength <= 90) {
    strengthNum = "medium";
    strengthString = "MEDIUM";
    filledSquares = 3;
  } else if (strength > 90) {
    strengthNum = "strong";
    strengthString = "STRONG";
    filledSquares = 4;
  }

  return (
    <div className="bg-[var(--background)] py-4 px-6 flex items-center justify-between">
      <p className="text-[var(--light-gray)] font-semibold">STRENGTH</p>
      <div className="flex items-center gap-4">
        <p className="text-lg font-bold">{strengthString}</p>
        <div className="flex gap-1">
          {[...Array(filledSquares)].map((_, i) => (
            <FilledSquare key={i} str={strengthNum} />
          ))}
          {[...Array(4 - filledSquares)].map((_, i) => (
            <FilledSquare key={i} />
          ))}
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
