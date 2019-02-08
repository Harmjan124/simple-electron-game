import {BaseGameObject} from "../model/objects/BaseGameObject";
import {Point} from "../model/Point";
import {Size} from "../model/Size";



export class Rock extends BaseGameObject{
    getImage(): SVGImageElement {
        let stone_img = require('./Object-texture/stone.svg');
        return stone_img;
    }

    getSize(): Size {
        return new Size(new Point(20, 10), new Point(20, 0), new Point(0, 10));
    }

    isStatic(): Boolean {
        return true;
    }
}