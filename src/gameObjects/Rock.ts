import {BaseGameObject} from "../model/objects/BaseGameObject";
import {Point} from "../model/Point";
import {Size} from "../model/Size";


export class Rock extends BaseGameObject{
    getImage(): string {
        return "./resources/stone.svg";
    }

    getSize(): Size {
        return new Size(new Point(20, 10), new Point(20, 0), new Point(0, 10));
    }

    isStatic(): Boolean {
        return true;
    }
}

