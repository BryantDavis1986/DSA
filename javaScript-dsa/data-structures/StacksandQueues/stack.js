'use strict';

const Node = require('../linked-list/node.js');

class Stack{
    constructor(){
        this.top = null;
    }

    push(value){
        let node = new Node(value);
        node.next = this.top;
        this.top = node;
        return this.top.value;
    }

    pop(){
        if(this.top === null){
            return null;
        }
        let result = this.top.value;
        this.top = this.top.next;
        return result;
    }

    peek(){
        if(this.top === null){
            return null;
        }

        return this.top.value;
    }
}

module.exports = Stack;