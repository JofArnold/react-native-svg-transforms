import omit from "lodash.omit";
import * as React from "react";
import * as ReactNativeWeb from "react-native-web";

const createReactElement =
  ReactNativeWeb.unstable_createElement || React.createElement;

const convertTransforms = (props) => {
  const transforms = [];

  if (props.translateX || props.translateY) {
    const x = props.translateX;
    const y = props.translateY;
    transforms.push(`translate(${x}, ${y})`);
  }

  if (props.originX || props.originY) {
    const x = props.originX;
    const y = props.originY;
    transforms.push(`origin(${x}, ${y})`);
  }

  if (props.scaleX || props.scaleY) {
    const x = props.scaleX;
    const y = props.scaleY;
    transforms.push(`scale(${x}, ${y})`);
  }

  if (props.rotateX || props.rotateY) {
    const x = props.rotateX;
    const y = props.rotateY;
    transforms.push(`rotate(${x}, ${y})`);
  }

  if (props.skewX || props.skewY) {
    const x = props.skewX;
    const y = props.skewY;
    transforms.push(`skew(${x}, ${y})`);
  }

  if (props.scale) {
    transforms.push(`scale(${props.scale})`);
  }

  if (props.origin) {
    transforms.push(`origin(${props.origin})`);
  }

  if (props.translate) {
    transforms.push(`translate(${props.translate})`);
  }
  const propsWithoutTransforms = omit(props, [
    "translateX",
    "translateY",
    "originX",
    "originY",
    "scaleX",
    "scaleY",
    "rotateX",
    "rotateY",
    "scale",
    "origin",
    "translate",
  ]);
  if (transforms.length) {
    propsWithoutTransforms.transform = transforms;
  }
  return propsWithoutTransforms;
};

function createElement(name, type) {
  class ModifiedComponent extends React.Component {
    render() {
      const newProps = convertTransforms(this.props);
      return createReactElement(type, newProps, this.props.children);
    }
  }
  ModifiedComponent.displayName = name;

  return ModifiedComponent;
}

export const Svg = createElement("Svg", "svg");

export default Svg;
Svg.Svg = Svg; // stay consistent with the old require based api

export const Circle = createElement("Circle", "circle");
Svg.Circle = Circle;

export const ClipPath = createElement("ClipPath", "clipPath");
Svg.ClipPath = ClipPath;

export const Defs = createElement("Defs", "defs");
Svg.Defs = Defs;

export const Ellipse = createElement("Ellipse", "ellipse");
Svg.Ellipse = Ellipse;

export const ForeignObject = createElement("ForeignObject", "foreignObject");
Svg.ForeignObject = ForeignObject;

export const G = createElement("G", "g");
Svg.G = G;

export const Image = createElement("Image", "image");
Svg.Image = Image;

export const Line = createElement("Line", "line");
Svg.Line = Line;

export const LinearGradient = createElement("LinearGradient", "linearGradient");
Svg.LinearGradient = LinearGradient;

export const Marker = createElement("Marker", "marker");
Svg.Marker = Marker;

export const Mask = createElement("Mask", "mask");
Svg.Mask = Mask;

export const Path = createElement("Path", "path");
Svg.Path = Path;

export const Pattern = createElement("Pattern", "pattern");
Svg.Pattern = Pattern;

export const Polygon = createElement("Polygon", "polygon");
Svg.Polygon = Polygon;

export const Polyline = createElement("Polyline", "polyline");
Svg.Polyline = Polyline;

export const RadialGradient = createElement("RadialGradient", "radialGradient");
Svg.RadialGradient = RadialGradient;

export const Rect = createElement("Rect", "rect");
Svg.Rect = Rect;

export const Stop = createElement("Stop", "stop");
Svg.Stop = Stop;

export const Symbol = createElement("Symbol", "symbol");
Svg.Symbol = Symbol;

export const Text = createElement("Text", "text");
Svg.Text = Text;

export const TextPath = createElement("TextPath", "textPath");
Svg.TextPath = TextPath;

export const TSpan = createElement("TSpan", "tspan");
Svg.TSpan = TSpan;

export const Use = createElement("Use", "use");
Svg.Use = Use;
