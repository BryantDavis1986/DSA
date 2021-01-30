'use strict';

const LinkedList = require('../linked-list/linked-list.js');
const Node = require('./node.js');

class HashTable {
    constructor(num){
        this.map = new Array(num);
    }

    getHash(key){

        let total = 0;
        for(let i = 0; i < key.length; i++){
            total += key.charCodeAt(i);
        }
        // console.log(total)
        let primeValue = total * 599;
        // console.log(primeValue);
        let index = (primeValue % this.map.length);
        // console.log(this.map.length);
        // console.log(index);
        return index;
    }

    add(key, value){
        let index = this.getHash(key);
        // console.log(index);
        let htNode = new Node(key, value);
        let node = new LinkedList(htNode, Node);
        if( typeof this.map[index] !== LinkedList){
            this.map[index] = node;
            // console.log(JSON.stringify(this.map));
        }
        else{
            this.map[index].append(htNode);
        }

    }

    get(key){
        let index = this.getHash(key);
        if(this.map[index]){

                let current = this.map[index].head;

                while(current){
                    if(current.value.key === key){
                        return current.value.value;
                    }
                    current = current.next;
                }
        }
    }

    contains(key){
        let index = this.getHash(key);
        let location = this.map[index];

        if(location){
            let current = this.map[index].current;

            while(current){

                if(current.value.key === key){
                    return true;
                }
                current = current.next;
            }
        }
        return false;
    }
}

module.exports = HashTable;