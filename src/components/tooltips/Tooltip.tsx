"use client";

import { useState } from "react";

export const Tooltip = ({ text = "Hover me" }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Error al copiar al portapapeles:", err);
    }
  };

  return (
    <button
      className="relative inline-block tooltip text-white text-xl transition-all duration-[250ms]"
      onClick={handleCopy}>
      {text}
      <span className="absolute z-10 transition-all duration-[250ms] w-full bg-[#1e50f4] text-white text-center text-sm py-1 rounded-md tooltip-text tooltip-text left-0 -top-8">
        {copied ? "¡Copiado!" : "Copiar al portapapeles"}
      </span>
    </button>
  );
};

export default Tooltip;
