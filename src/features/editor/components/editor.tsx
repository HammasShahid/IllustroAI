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
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

  return (
    <div className="flex h-full flex-col">
      <Navbar />
      <div className="absolute top-[68px] flex h-[calc(100%-68px)] w-full">
        <Sidebar />
        <main className="relative flex flex-1 flex-col overflow-auto bg-muted">
          <Toolbar />
          <div
            ref={containerRef}
            className="h-[calc(100%-68px-56px)] flex-1 bg-muted"
          >
            <canvas ref={canvasRef} />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
