import {World} from "../world/World";
import {Input} from "../Input";
import {Engine} from "./Engine";
import {Queue} from "../Queue";
import {GameObject} from "../objects/GameObject";
import {Point} from "../Point";

export class EngineImpl implements Engine{
    private _running: boolean = true;
    private _inputQueue: Queue<Input> = new Queue();
    private _movingLeft: GameObject[] = [];
    private _movingRight: GameObject[] = [];

    private readonly world: World;

    constructor(world: World){
        this.world = world;
        let _this = this;
        setInterval(function(){
            _this._movingLeft.forEach(function(left){
                let pos = left.worldPosition();
                let newPost = new Point(pos.x, pos.y - 1);
                left.setWorldPosition(newPost);
            });
            _this._movingRight.forEach(function(right){
                let pos = right.worldPosition();
                let newPost = new Point(pos.x, pos.y + 1);
                right.setWorldPosition(newPost);
            });
        },10);
        this.whileLoop();
    }

    whileLoop() {
        while (this._running){
            let nextInput = this._inputQueue.dequeue();
            if(nextInput != null){
                let playerPosition = this.world.getPlayer().worldPosition();
                //do something with input
                if(nextInput.keypressed() === "left" && nextInput.keydown()){
                    this.moveObjectLeft(this.world.getPlayer());
                }else if(nextInput.keypressed() === "left" && !nextInput.keydown()){
                    this.stopMoveObjectLeft(this.world.getPlayer())
                }else if(nextInput.keypressed() === "right" && nextInput.keydown()){
                    this.moveObjectRight(this.world.getPlayer());
                }else if(nextInput.keypressed() === "right" && !nextInput.keydown()){
                    this.stopMoveObjectRight(this.world.getPlayer())
                }
            }
        }
    }


    private moveObjectLeft(gameObject: GameObject) {
        this._movingLeft.push(gameObject);
    }

    private moveObjectRight(gameObject: GameObject) {
        this._movingRight.push(gameObject);
    }

    private stopMoveObjectLeft(gameObject: GameObject) {
        let copy = [];
        for(let i = 0; i < this._movingLeft.length; i++){
            if(this._movingLeft[i] === gameObject){
                // do nothing
            }else{
                copy.push(this._movingLeft[i])
            }
        }
        this._movingLeft = copy;
    }

    private stopMoveObjectRight(gameObject: GameObject) {
        let copy = [];
        for(let i = 0; i < this._movingRight.length; i++){
            if(this._movingRight[i] === gameObject){
                // do nothing
            }else{
                copy.push(this._movingRight[i])
            }
        }
        this._movingRight = copy;
    }

    getWorld(): World {
        return this.world;
    }

    setInput(input: Input) {
    }

    shutdown(): void {
        this._running = true;
    }


}
