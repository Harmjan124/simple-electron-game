import {Point} from "./Point";
import {Size} from "./Size";

export interface GameObject {
    getImage(): SVGImageElement;

    worldPosition(): Point

    setWorldPosition(p: Point): void

    relativePosition(): Point

    getChildren(): GameObject[]

    addChild(child: GameObject): void

    setParent(parent: GameObject): void

    isChild(): Boolean;

    isParent(): Boolean;

    getSize(): Size;
}