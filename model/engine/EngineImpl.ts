import {Engine} from "./";
import {World} from "../world/World";
import {Input} from "../Input";

export class EngineImpl implements Engine{
    getWorld(): World {
        return undefined;
    }

    setInput(input: Input) {
    }
}