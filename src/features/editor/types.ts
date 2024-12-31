export type ActiveTool =
  | "select"
  | "shapes"
  | "text"
  | "images"
  | "draw"
  | "fill"
  | "stroke-color"
  | "stroke-width"
  | "font"
  | "opacity"
  | "filter"
  | "settings"
  | "ai"
  | "remove-bg"
  | "templates";

const DEFAULT_FILL_COLOR = "rgba(0,0,0,1)";
const DEFAULT_STROKE_COLOR = "rgba(0,0,0,1)";
const DEFAULT_STROKE_WIDTH = 2;

export const DEFAULT_SHAPE_OPTIONS = {
  CIRCLE: {
    radius: 150,
    left: 100,
    top: 100,
    fill: DEFAULT_FILL_COLOR,
    stroke: DEFAULT_STROKE_COLOR,
    strokeWidth: DEFAULT_STROKE_WIDTH,
  },
  RECTANGLE: {
    width: 300,
    height: 300,
    left: 100,
    top: 100,
    fill: DEFAULT_FILL_COLOR,
    stroke: DEFAULT_STROKE_COLOR,
    strokeWidth: DEFAULT_STROKE_WIDTH,
    angle: 0,
  },
  TRIANGLE: {
    width: 300,
    height: 300,
    left: 100,
    top: 100,
    fill: DEFAULT_FILL_COLOR,
    stroke: DEFAULT_STROKE_COLOR,
    strokeWidth: DEFAULT_STROKE_WIDTH,
  },
  DIAMOND: {
    width: 300,
    height: 300,
    left: 100,
    top: 100,
    fill: DEFAULT_FILL_COLOR,
    stroke: DEFAULT_STROKE_COLOR,
    strokeWidth: DEFAULT_STROKE_WIDTH,
    angle: 0,
  },
};

export interface BuildEditorProps {
  canvas: fabric.Canvas;
}

export interface Editor {
  addCircle: () => void;
  addSoftRectangle: () => void;
  addRectangle: () => void;
  addTriangle: () => void;
  addInvertedTriangle: () => void;
  addDiamond: () => void;
}
