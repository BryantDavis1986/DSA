'use strict';

class Node{
    constructor(value = null){
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }
}

module.exports = Node;