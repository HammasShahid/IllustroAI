import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarItemProps {
  label: string;
  icon: LucideIcon;
  isActive?: boolean;
  onClick: () => void;
}

export default function SidebarItem({
  label,
  icon: Icon,
  isActive,
  onClick,
}: SidebarItemProps) {
  return (
    <Button
      variant="ghost"
      onClick={onClick}
      className={cn(
        "flex h-full w-full flex-col rounded-none p-3 py-4",
        isActive && "bg-muted text-primary",
      )}
    >
      <Icon className="size-5 shrink-0 stroke-2" />
      <span className="text-xs">{label}</span>
    </Button>
  );
}
