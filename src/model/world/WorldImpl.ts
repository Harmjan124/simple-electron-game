import {World} from "./World";
import {GameObject} from "../objects/GameObject";

export class WorldImpl implements World{
    getGameObjects(): GameObject[] {
        return [];
    }
}