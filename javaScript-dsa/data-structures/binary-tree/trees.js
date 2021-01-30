'use strict';

const Node = require('./node.js');

class Tree{
    constructor(){
        this.root = null;
    }

    preOrder(root){
        let array = [];
        if(root) array;
        return this.preOrder2(root, array);
    }

    preOrder2(root, array){
        array.push(root.value);

        if(root.leftChild) this.preOrder2(root.leftChild, array)
        if(root.rightChild) this.preOrder2(root.rightChild, array);

        return array;

    }
   postOrder(root){
        if(root.leftChild === null && root.rightChild === null){
            return new Error('Your tree is empty')
        }
        let array = [];
        let current = root;
        this.postOrder2(current, array);
        return array;

    }
    postOrder2(root, array){

        if(root.leftChild !== null){
            this.postOrder2(root.leftChild, array);
        }
        
        if(root.rightChild !== null){
            this.postOrder2(root.rightChild, array);
        }
        array.push(root.value);
    }
    inOrder(root){
        if(root.leftChild === null && root.rightChild === null){
            return new Error('Your tree is empty')
        }
        let array = [];
        let current = root;
        this.inOrder2(current, array);
        return array;

    }
    inOrder2(root, array){

        if(root.leftChild !== null){
            this.inOrder2(root.leftChild, array);
        }

        array.push(root.value);

        if(root.rightChild !== null){
            this.inOrder2(root.rightChild, array);
        }
    }
    findMaximumValue(root){
        let number = 0;
        if(!root){
            return number;
        }
        number = root.value;
        let leftResult = this.findMaximumValue(root.leftChild);
        let rightResult = this.findMaximumValue(root.rightChild);
        if(leftResult > number) number = leftResult;
        if(rightResult > number) number = rightResult;
        return number;
    }

    breadth(root){
        let result = [];
        if(!root){
            return result;
        }
        // a real queue is faster but this does the trick for now
        let queue = [];
    queue.push(root);
    result.push([root.value]);
        while(queue.length > 0){
                let currentNode = queue.shift();
                let row = [];
                    if(currentNode.leftChild !== null){
                        queue.push(currentNode.leftChild);
                        row.push(currentNode.leftChild.value);
                    }
                    if(currentNode.rightChild !== null){
                        queue.push(currentNode.rightChild);
                        row.push(currentNode.rightChild.value);
                    }
                    if(row.length){
                        result.push(row)
                    }
        }
        return result;
    }
}

module.exports = Tree;