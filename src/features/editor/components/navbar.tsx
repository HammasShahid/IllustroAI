import {
  ChevronDown,
  Download,
  MousePointerClick,
  Redo2,
  Undo2,
} from "lucide-react";
import { CiFileOn } from "react-icons/ci";
import { BsCloudCheck } from "react-icons/bs";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";

import Logo from "@/features/editor/components/logo";
import Hint from "@/components/hint";

export default function Navbar() {
  return (
    <nav className="flex h-[68px] w-full items-center gap-x-8 border-b bg-white p-4 lg:pl-[34px]">
      <Logo />
      <div className="flex h-full w-full items-center gap-x-1">
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              File <ChevronDown className="ml-2 size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="min-w-60">
            <DropdownMenuItem
              onClick={() => {}}
              className="flex items-center gap-x-2"
            >
              <CiFileOn className="size-8" />
              <div>
                <p>Open</p>
                <p className="text-xs text-muted-foreground">
                  Open a JSON file
                </p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Separator orientation="vertical" className="mx-2" />
        <Hint label="Select" side="bottom" sideOffset={10}>
          <Button variant="ghost" size="icon" onClick={() => {}} className="">
            <MousePointerClick className="size-4" />
          </Button>
        </Hint>

        <Hint label="Undo" side="bottom" sideOffset={10}>
          <Button variant="ghost" size="icon" onClick={() => {}} className="">
            <Undo2 className="size-4" />
          </Button>
        </Hint>

        <Hint label="Redo" side="bottom" sideOffset={10}>
          <Button variant="ghost" size="icon" onClick={() => {}} className="">
            <Redo2 className="size-4" />
          </Button>
        </Hint>

        <Separator orientation="vertical" className="mx-2" />

        <div className="flex items-center gap-x-2 text-muted-foreground">
          <BsCloudCheck className="size-[20px]" />
          <span>Saved</span>
        </div>
        <div className="ml-auto flex items-center gap-x-4">
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                Export
                <Download className="ml-4 size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-60">
              <DropdownMenuItem
                onClick={() => {}}
                className="flex items-center gap-x-2"
              >
                <CiFileOn className="size-8" />
                <div>
                  <p>JSON</p>
                  <p className="text-xs text-muted-foreground">
                    Save for later editing
                  </p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {}}
                className="flex items-center gap-x-2"
              >
                <CiFileOn className="size-8" />
                <div>
                  <p>PNG</p>
                  <p className="text-xs text-muted-foreground">
                    Best for sharing on the web
                  </p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {}}
                className="flex items-center gap-x-2"
              >
                <CiFileOn className="size-8" />
                <div>
                  <p>JPEG</p>
                  <p className="text-xs text-muted-foreground">
                    Best for print
                  </p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {}}
                className="flex items-center gap-x-2"
              >
                <CiFileOn className="size-8" />
                <div>
                  <p>SVG</p>
                  <p className="text-xs text-muted-foreground">
                    Best for editing in a vector software
                  </p>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* TODO: Add auth icon */}
        </div>
      </div>
    </nav>
  );
}
