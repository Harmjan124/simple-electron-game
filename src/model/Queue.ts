export class Queue<T> {

    private queue: T[] = [];
    private offset = 0;

    public getLength() {
        return (this.queue.length - this.offset);
    }

    public isEmpty() {
        return (this.queue.length == 0);
    }

    public enqueue(item: T) {
        this.queue.push(item);
    }

    public dequeue(): T | null {

        // if the queue is empty, return immediately
        if (this.queue.length == 0) return null;

        // store the item at the front of the queue
        let item = this.queue[this.offset];

        // increment the offset and remove the free space if necessary
        if (++this.offset * 2 >= this.queue.length) {
            this.queue = this.queue.slice(this.offset);
            this.offset = 0;
        }

        // return the dequeued item
        return item;
    }

    public peek(): T | null {
        return (this.queue.length > 0 ? this.queue[this.offset] : null);
    }

}
