import {World} from "../model/world/World";
import {GameObject} from "../model/objects/GameObject";
import {Rock} from "../gameObjects/Rock";

export function world1(): GameObject[]{
    return [
        new Rock()
    ]
}