import {GameObject} from "../objects/GameObject";

export interface World {
    getGameObjects(): GameObject[];
}