"use client";

import { useEffect, useRef } from "react";
import { fabric } from "fabric";

import { useEditor } from "@/features/editor/hooks/use-editor";

import Navbar from "@/features/editor/components/navbar";
import Sidebar from "@/features/editor/components/sidebar";
import Toolbar from "@/features/editor/components/toolbar";
import Footer from "@/features/editor/components/footer";

export default function Editor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef(null);

  const { init } = useEditor();

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current!, {
      controlsAboveOverlay: true,
      preserveObjectStacking: true,
    });

    init({
      initialContainer: containerRef.current!,
      initialCanvas: canvas,
    });

    return () => {
      canvas.dispose();
    };
  }, [init]);

  const layout = { navbarHeight: "68px", toolbarHeight: "56px" };

  return (
    <div className="flex h-full flex-col">
      <Navbar height={layout.navbarHeight} />
      <div
        className={`absolute top-[${layout.navbarHeight}] flex h-[calc(100%-${layout.navbarHeight})] w-full`}
      >
        <Sidebar />
        <main className="relative flex flex-1 flex-col overflow-auto bg-muted">
          <Toolbar height={layout.toolbarHeight} />
          <div
            ref={containerRef}
            className={`h-[calc(100%-${layout.navbarHeight}-${layout.toolbarHeight}] flex-1 bg-muted`}
          >
            <canvas ref={canvasRef} />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
