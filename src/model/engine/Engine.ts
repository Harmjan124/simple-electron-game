import {GameObject} from "../objects/GameObject";
import {World} from "../world/World";
import {Physics} from "../physics/Physics";
import {Input} from "../Input";

export interface Engine {
    setInput(input: Input):void

    getWorld(): World
}