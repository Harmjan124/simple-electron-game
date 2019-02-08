import {World} from "./World";
import {GameObject} from "../objects/GameObject";

export class WorldImpl implements World{
    private readonly player: GameObject;


    constructor(player: GameObject) {
        this.player = player;
    }

    getGameObjects(): GameObject[] {
        return [];
    }

    getPlayer(): GameObject {
        return this.player;
    }
}