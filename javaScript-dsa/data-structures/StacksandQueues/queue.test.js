'use strict';

const Queue = require('./queue.js');

describe('testing Queue implementation', () => {
    it('can create empty queue', () => {
        let queue = new Queue();
        expect(queue.front).toBeFalsy();
        expect(queue.rear).toBeFalsy();
    })
    it('can enqueue', () => {
        let queue = new Queue();
        queue.enqueue(5);
        expect(queue.front.value).toEqual(5);
    })
    it('can enqueue multiple times', () => {
        let queue = new Queue();
        queue.enqueue(5);
        queue.enqueue(15);
        queue.enqueue(50);
        queue.enqueue(500);

        expect(queue.front.value).toEqual(5);
    })
    it('can dequeue from queue', () => {
        let queue = new Queue();
        queue.enqueue(5);
        queue.enqueue(15);
        queue.enqueue(50);
        queue.enqueue(500);
        let result = queue.dequeue();
        expect(queue.front.value).toEqual(15);
        expect(result).toEqual(5);
    })
    it('can peek from queue', () => {
        let queue = new Queue();
        queue.enqueue(5);
        queue.enqueue(15);
        queue.enqueue(50);
        queue.enqueue(500);
        let result = queue.peek();
        expect(result).toEqual(5);
    })
    it('can empty queue', () => {
        let queue = new Queue();
        queue.enqueue(5);
        queue.enqueue(15);
        queue.enqueue(50);
        queue.enqueue(500);
        queue.dequeue();
        queue.dequeue();
        queue.dequeue();
        queue.dequeue();
        let result = queue.peek();
        expect(result).toEqual(null);
    })
})