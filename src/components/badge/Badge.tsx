import { cn } from "@/utils/cn";

export default function Badge({
  text,
  withColor,
}: {
  text: string;
  withColor?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-[4px] outline px-3 py-0.75",
        withColor
          ? "bg-spectrum-blue-800/25 text-spectrum-blue-200 outline-spectrum-blue-200/25"
          : "bg-gray-800/25 text-gray-400 outline-gray-700",
      )}
    >
      <p className="text-sm">{text}</p>
    </div>
  );
}
