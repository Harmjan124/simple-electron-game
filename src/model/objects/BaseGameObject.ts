import {GameObject} from "./GameObject";
import {Size} from "../Size";
import {Point} from "../Point";

export abstract class BaseGameObject implements GameObject{
    private _worldPosition: Point = new Point(0,0);
    private _parent: GameObject | null = null;
    private _children: GameObject[] = [];

    addChild(child: GameObject): void {
        this._children.push(child);
    }

    getChildren(): GameObject[] {
        return this._children;
    }

    abstract getImage(): string;

    abstract getSize(): Size;

    isChild(): Boolean {
        return false;
    }

    isParent(): Boolean {
        return this._children.length > 0;
    }

    relativePosition(): Point {
        //TODO
        return new Point(0,0);
    }

    setParent(parent: GameObject): void {
        this._parent = parent;
    }

    worldPosition(): Point {
        return this._worldPosition;
    }

    setWorldPosition(p: Point): void {
        this._worldPosition = p;
    }

    isStatic(): Boolean {
        return false;
    }

}