import {Point} from "./Point";

export class Size {
    private _rightTop: Point;
    private _rightButton: Point;
    private _leftButton: Point;


    constructor(rightTop: Point, rightButton: Point, leftButton: Point) {
        this._rightTop = rightTop;
        this._rightButton = rightButton;
        this._leftButton = leftButton;
    }


    get rightTop(): Point {
        return this._rightTop;
    }

    set rightTop(value: Point) {
        this._rightTop = value;
    }

    get rightButton(): Point {
        return this._rightButton;
    }

    set rightButton(value: Point) {
        this._rightButton = value;
    }

    get leftButton(): Point {
        return this._leftButton;
    }

    set leftButton(value: Point) {
        this._leftButton = value;
    }
}