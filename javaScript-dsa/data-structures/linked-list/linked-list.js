'use strict'

// const Node = require('./node.js');

class LinkedList {

  constructor(head = null, Node) {
    this.head = head;
    this.Node = Node;
  }

  insert(value) {
    this.current = this.head;
    let node = new this.Node(value);
    node.next = this.head;
    this.head = node;
  }

  includes(value) {
    this.current = this.head;

    while (this.current !== null) {
      if (this.current.value === value) {
        return true;
      }
      this.current = this.current.next;
    }
    return false;
  }

  toString() {
    this.current = this.head;

    if (this.head == null) {
      return 'NULL';
    }
    let objString = '';

    while (this.current !== null) {
      objString = `${objString} ${this.current.value} =>`;
      this.current = this.current.next;
    }
    objString = `${objString} NULL`;
    return objString;
  }

  append(value) {
    this.current = this.head;
    if (this.head === null) {
      this.head = new this.Node(value);
      return;
    }
    while (this.current !== null) {
      if (this.current.next === null && this.current.value !== value) {

        let node = new this.Node(value);
        // console.log(node);
        this.current.next = node;

        this.current = this.current.next;

      }
      this.current = this.current.next;
    }
  }

  insertBefore(value, newValue) {
    this.current = this.head;

    if (this.current.value === value) {
      this.insert(newValue)
    }
    else {

      let last = this.current;

      while (this.current !== null) {
        if (this.current.value === value) {
          let node = new this.Node(newValue);
          node.next = this.current;
          last.next = node;
          break;
        }
        last = this.current;
        this.current = this.current.next;
      }
    }
  }

  insertAfter(value, newValue) {
    this.current = this.head;

    while (this.current !== null) {
      if (this.current.value === value) {
        let node = new this.Node(newValue);
        node.next = this.current.next;
        this.current.next = node;
      }
      this.current = this.current.next;
    }

  }

  kthFromEnd(key) {
    this.current = this.head;

    let walking = this.current;
    let running = this.current;

    let k = key;
    if (k < 0) {
      throw new console.error('Key cannot be a negative number');
    }


    while (running.next !== null) {
      if(running.next && k > 0){
        k--;
        running = running.next;
      }
      else if(!running.next){
        throw new console.error('K cannot be same length as Linked List');
      }
      else{

        walking = walking.next;
        running = running.next;
      }
    }
    return walking.value;
  }

}

module.exports = LinkedList;