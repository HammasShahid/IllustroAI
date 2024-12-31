import {
  DEFAULT_SHAPE_OPTIONS,
  type BuildEditorProps,
  type Editor,
} from "@/features/editor/types";

import { useCallback, useMemo, useState } from "react";
import { fabric } from "fabric";

import { useAutoResize } from "@/features/editor/hooks/use-auto-resize";

const buildEditor = ({ canvas }: BuildEditorProps): Editor => {
  const centerObjectToWorkspace = (object: fabric.Object) => {
    const workspace = canvas.getObjects().find((obj) => obj.name === "clip");
    if (!workspace) return;

    const center = workspace.getCenterPoint();

    // @ts-ignore
    canvas._centerObject(object, center);
  };

  const addObjectToCenter = (object: fabric.Object) => {
    centerObjectToWorkspace(object);
    canvas.add(object);
    canvas.setActiveObject(object);
  };

  return {
    addCircle: () => {
      const circle = new fabric.Circle(DEFAULT_SHAPE_OPTIONS.CIRCLE);
      addObjectToCenter(circle);
    },
    addSoftRectangle: () => {
      const rectangle = new fabric.Rect({
        ...DEFAULT_SHAPE_OPTIONS.RECTANGLE,
        rx: 50,
        ry: 50,
      });
      addObjectToCenter(rectangle);
    },
    addRectangle: () => {
      const rectangle = new fabric.Rect(DEFAULT_SHAPE_OPTIONS.RECTANGLE);
      addObjectToCenter(rectangle);
    },
    addTriangle: () => {
      const triangle = new fabric.Triangle(DEFAULT_SHAPE_OPTIONS.TRIANGLE);
      addObjectToCenter(triangle);
    },
    addInvertedTriangle: () => {
      const WIDTH = DEFAULT_SHAPE_OPTIONS.TRIANGLE.width;
      const HEIGHT = DEFAULT_SHAPE_OPTIONS.TRIANGLE.height;

      const invertedTriangle = new fabric.Polygon(
        [
          { x: 0, y: 0 },
          { x: WIDTH, y: 0 },
          { x: WIDTH / 2, y: HEIGHT },
        ],
        { ...DEFAULT_SHAPE_OPTIONS.TRIANGLE },
      );
      addObjectToCenter(invertedTriangle);
    },
    addDiamond: () => {
      const WIDTH = DEFAULT_SHAPE_OPTIONS.DIAMOND.width;
      const HEIGHT = DEFAULT_SHAPE_OPTIONS.DIAMOND.height;

      const diamond = new fabric.Polygon(
        [
          { x: WIDTH / 2, y: 0 },
          { x: WIDTH, y: HEIGHT / 2 },
          { x: WIDTH / 2, y: HEIGHT },
          { x: 0, y: HEIGHT / 2 },
        ],
        {
          ...DEFAULT_SHAPE_OPTIONS.DIAMOND,
        },
      );
      addObjectToCenter(diamond);
    },
  };
};

export function useEditor() {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);

  useAutoResize({ container, canvas });

  const editor = useMemo(() => {
    if (!canvas) return undefined;

    return buildEditor({ canvas });
  }, [canvas]);

  const init = useCallback(
    ({
      initialCanvas,
      initialContainer,
    }: {
      initialCanvas: fabric.Canvas;
      initialContainer: HTMLDivElement;
    }) => {
      fabric.Object.prototype.set({
        cornerColor: "#FFF",
        cornerStyle: "circle",
        borderColor: "#3b82f6",
        borderScaleFactor: 1.5,
        transparentCorners: false,
        borderOpacityWhenMoving: 1,
        cornerStrokeColor: "#3b82f6",
      });

      const initialWorkspace = new fabric.Rect({
        width: 900,
        height: 1200,
        name: "clip",
        fill: "white",
        selectable: false,
        hasControls: false,
        shadow: new fabric.Shadow({
          color: "rgba(0,0,0,0.8)",
          blur: 5,
        }),
      });

      initialCanvas.setWidth(initialContainer.offsetWidth);
      initialCanvas.setHeight(initialContainer.offsetHeight);

      initialCanvas.add(initialWorkspace);
      initialCanvas.centerObject(initialWorkspace);
      initialCanvas.clipPath = initialWorkspace;

      setCanvas(initialCanvas);
      setContainer(initialContainer);
    },
    [],
  );

  return { init, editor };
}
