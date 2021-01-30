'use strict';

const Node = require('../linked-list/node.js');

class Queue {
    constructor(){
        this.front = null;
        this.rear = this.front;
    }

    enqueue(value){
        let node = new Node(value);

        if(this.front === null){
            this.front = node;
            this.rear = node;
        }
        else {
            this.rear.next = node;
            this.rear = node;
        }
    }

    dequeue(){
        if(this.front === null){
            return null;
        }
        let result = this.front.value;
        this.front = this.front.next;
        return result;
    }

    peek(){
        if(this.front === null){
            return null;
        }
        return this.front.value;
    }
}

module.exports = Queue;