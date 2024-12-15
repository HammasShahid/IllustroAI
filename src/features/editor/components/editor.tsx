"use client";

import { useEffect, useRef } from "react";
import { fabric } from "fabric";
import { useEditor } from "../hooks/use-editor";

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
  }, [init]);

  return (
    <div className="flex h-full flex-col">
      <div ref={containerRef} className="bg-muted h-full flex-1">
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}
