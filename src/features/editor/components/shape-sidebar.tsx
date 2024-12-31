import type { ActiveTool } from "@/features/editor/types";

import { FaCircle, FaSquare, FaSquareFull } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";
import { FaDiamond } from "react-icons/fa6";

import { cn } from "@/lib/utils";

import { ScrollArea } from "@/components/ui/scroll-area";

import ToolSidebarHeader from "@/features/editor/components/tool-sidebar-header";
import ToolSidebarClose from "@/features/editor/components/tool-sidebar-close";
import ShapeTool from "@/features/editor/components/shape-tool";

interface ShapeSidebarProps {
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
}

export default function ShapeSidebar({
  activeTool,
  onChangeActiveTool,
}: ShapeSidebarProps) {
  const handleClose = () => onChangeActiveTool("select");

  return (
    <aside
      className={cn(
        "relative z-40 flex h-full w-[360px] flex-col border-r",
        activeTool === "shapes" ? "visible" : "hidden",
      )}
    >
      <ToolSidebarHeader
        title="Shapes"
        description="Add shapes to your canvas"
      />
      <ScrollArea>
        <div className="grid grid-cols-3 gap-5 p-4">
          <ShapeTool icon={FaCircle} onClick={() => {}} />
          <ShapeTool icon={FaSquare} onClick={() => {}} />
          <ShapeTool icon={FaSquareFull} onClick={() => {}} />
          <ShapeTool icon={IoTriangle} onClick={() => {}} />
          <ShapeTool
            icon={IoTriangle}
            onClick={() => {}}
            iconClassName="rotate-180"
          />
          <ShapeTool icon={FaDiamond} onClick={() => {}} />
        </div>
      </ScrollArea>
      <ToolSidebarClose onClick={handleClose} />
    </aside>
  );
}
