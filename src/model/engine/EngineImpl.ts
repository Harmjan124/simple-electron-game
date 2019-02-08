import {World} from "../world/World";
import {Input} from "../Input";
import {Engine} from "./Engine";

export class EngineImpl implements Engine{
    private readonly world: World;

    constructor(world: World){
        this.world = world;


        this.whileLoop();
    }

    whileLoop() {

    }

    getWorld(): World {
        return this.world;
    }

    setInput(input: Input) {
    }
}