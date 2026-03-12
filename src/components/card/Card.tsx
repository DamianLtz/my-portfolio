import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/types";
import SpotlightCard from "../SpotlightCard";
import Badge from "../badge/Badge";

export default function Card({
  index,
  date,
  title,
  description,
  technologies,
  href,
}: Project) {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className="group block"
    >
      <SpotlightCard className="bg-spectrum-blue-1000/50 border-gray-800 transition-all duration-300 group-hover:border-gray-700 h-full backdrop-blur-sm">
        <div className="flex flex-col gap-6 text-start">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-spectrum-blue-500">
                {index}
              </span>
              <div className="rounded-full bg-gray-800/50 px-3 py-1 outline outline-gray-700/50">
                <span className="text-xs text-gray-400 font-medium">
                  {date}
                </span>
              </div>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-800 bg-gray-900 transition-all duration-300 group-hover:bg-gray-800 group-hover:text-spectrum-blue-400">
              <ArrowUpRight className="h-5 w-5 transition-all duration-300 group-hover:rotate-45" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-spectrum-blue-400">
              {title}
            </h3>
            <p className="line-clamp-3 text-base leading-relaxed text-gray-400">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            {technologies.map((tech, i) => (
              <Badge key={`${tech}-${i}`} text={tech} />
            ))}
          </div>
        </div>
      </SpotlightCard>
    </a>
  );
}
