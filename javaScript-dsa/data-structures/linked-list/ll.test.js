'use strict';

const LinkedList = require('./linked-list.js');
const Node = require('./node.js');

describe('Test to make sure code challenge 04 passes', () => {
    it('Head returns null', () => {
        const linkedList = new LinkedList(null, Node);
        expect(linkedList.head).toBeNull();
    })
    it('can insert', () => {
        const linkedList = new LinkedList(null, Node);
        linkedList.insert(4);
        expect(linkedList.head.value).toEqual(4);
    })
    it('can insert multiple nodes in LL', () => {
        const linkedList = new LinkedList(null, Node);
        linkedList.insert(4);
        linkedList.insert(8);
        linkedList.insert(15);
        linkedList.insert(16);
        linkedList.insert(23);
        linkedList.insert(42);
        expect(linkedList.head.value).toEqual(42);
    })
    it('can find value in LL', () => {
        const linkedList = new LinkedList(null, Node);
        linkedList.insert(4);
        linkedList.insert(8);
        linkedList.insert(15);
        linkedList.insert(16);
        linkedList.insert(23);
        linkedList.insert(42);

        let search = 15;
        let exist = linkedList.includes(search);
        expect(exist).toBeTruthy();
    })
    it('cannot find value in LL', () => {
        const linkedList = new LinkedList(null, Node);
        linkedList.insert(4);
        linkedList.insert(8);
        linkedList.insert(15);
        linkedList.insert(16);
        linkedList.insert(23);
        linkedList.insert(42);

        let search = 100;
        let exist = linkedList.includes(search);
        expect(exist).toBeFalsy();
    })
    it('can return all values in LL', () => {
        const linkedList = new LinkedList(null, Node);
        linkedList.insert(4);
        linkedList.insert(8);
        linkedList.insert(15);
        linkedList.insert(16);
        linkedList.insert(23);
        linkedList.insert(42);
        let value = linkedList.toString();

        expect(value).toEqual(' 42 => 23 => 16 => 15 => 8 => 4 => NULL');
    })
    it('can add node at end of LL', () => {
        let linkedList = new LinkedList(null, Node);
        linkedList.insert(2);
        linkedList.insert(3);
        linkedList.insert(1);
        linkedList.append(5);
        let value = linkedList.toString();

        expect(value).toEqual(' 1 => 3 => 2 => 5 => NULL');
    })
    it('can add multiple nodes at end of LL', () => {
        let linkedList = new LinkedList(null, Node);
        linkedList.insert(2);
        linkedList.insert(3);
        linkedList.insert(1);
        linkedList.append(5);
        linkedList.append(10);
        let value = linkedList.toString();

        expect(value).toEqual(' 1 => 3 => 2 => 5 => 10 => NULL');
    })
    it('can insert node before LL', () => {
        let linkedList = new LinkedList(null, Node);
        linkedList.insert(2);
        linkedList.insert(3);
        linkedList.insert(1);
        linkedList.insertBefore(3, 5);
        let value = linkedList.toString();

        expect(value).toEqual(' 1 => 5 => 3 => 2 => NULL');
    })
    it('can insert node before first node LL', () => {
        let linkedList = new LinkedList(null, Node);
        linkedList.insert(2);
        linkedList.insert(3);
        linkedList.insert(1);
        linkedList.insertBefore(1, 5);
        let value = linkedList.toString();

        expect(value).toEqual(' 5 => 1 => 3 => 2 => NULL');
    })
    it('can insert node after middle node LL', () => {
        let linkedList = new LinkedList(null, Node);
        linkedList.insert(2);
        linkedList.insert(3);
        linkedList.insert(1);
        linkedList.insertAfter(3, 5);
        let value = linkedList.toString();

        expect(value).toEqual(' 1 => 3 => 5 => 2 => NULL');
    })
    it('can insert node at end LL', () => {
        let linkedList = new LinkedList(null, Node);
        linkedList.insert(2);
        linkedList.insert(3);
        linkedList.insert(1);
        linkedList.insertAfter(2, 5);
        let value = linkedList.toString();

        expect(value).toEqual(' 1 => 3 => 2 => 5 => NULL');
    })
    it('can return knth happy path LL', () => {
        let linkedList = new LinkedList(null, Node);
        linkedList.insert(10);
        linkedList.insert(20);
        linkedList.insert(30);
        linkedList.insert(40);
        linkedList.insert(50);

        let value = linkedList.kthFromEnd(1);

        expect(value).toEqual(20);
    })
})