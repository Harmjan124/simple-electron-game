import {BaseGameObject} from "../model/objects/BaseGameObject";
import {Point} from "../model/Point";
import {Size} from "../model/Size";


export class player extends BaseGameObject{
    getImage(): string {
        return "./resources/model.png";
    }

    getSize(): Size {
        return new Size(new Point(-20, -50), new Point(20, 0), new Point(0, -50));
    }

    isStatic(): Boolean {
        return true;
    }
}