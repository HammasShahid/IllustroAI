import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

import { cn } from "@/lib/utils";

interface ShapeToolProps {
  icon: LucideIcon | IconType;
  onClick: () => void;
  iconClassName?: string;
}

export default function ShapeTool({
  icon: Icon,
  onClick,
  iconClassName,
}: ShapeToolProps) {
  return (
    <button onClick={onClick} className="aspect-square rounded-md border p-5">
      <Icon className={cn("h-full w-full", iconClassName)} />
    </button>
  );
}
