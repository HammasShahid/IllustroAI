import type { ActiveTool, Editor } from "@/features/editor/types";

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
  editor: Editor | undefined;
}

export default function ShapeSidebar({
  activeTool,
  onChangeActiveTool,
  editor,
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
          <ShapeTool icon={FaCircle} onClick={() => editor?.addCircle()} />
          <ShapeTool
            icon={FaSquare}
            onClick={() => editor?.addSoftRectangle()}
          />
          <ShapeTool
            icon={FaSquareFull}
            onClick={() => editor?.addRectangle()}
          />
          <ShapeTool icon={IoTriangle} onClick={() => editor?.addTriangle()} />
          <ShapeTool
            icon={IoTriangle}
            onClick={() => editor?.addInvertedTriangle()}
            iconClassName="rotate-180"
          />
          <ShapeTool icon={FaDiamond} onClick={() => editor?.addDiamond()} />
        </div>
      </ScrollArea>
      <ToolSidebarClose onClick={handleClose} />
    </aside>
  );
}
