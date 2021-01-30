'use strict';

const Stack = require('./stack.js');

describe('ensuring Stack Implementation', () => {
    it('can push to stack', () => {
        let stack = new Stack();
        let result = stack.push(5);
        expect(result).toEqual(5);
    })
    it('can push multiple to stack', () => {
        let stack = new Stack();
        stack.push(15);
        stack.push(200);
        let result = stack.push(5);
        expect(result).toEqual(5);
    })
    it('can pop from stack', () => {
        let stack = new Stack();
        stack.push(15);
        stack.push(200);
        let result = stack.pop();
        expect(result).toEqual(200);
    })
    it('can empty stack', () => {
        let stack = new Stack();
        stack.push(15);
        stack.push(200);
        stack.pop()
        let result = stack.pop();
        let result2 = stack.pop();
        expect(result).toEqual(15);
        expect(result2).toEqual(null);
    })
    it('can peek', () => {
        let stack = new Stack();
        stack.push(1);
        stack.push(5);
        stack.push(25);
        let result = stack.peek();
        expect(result).toEqual(25);
    })
    it('can create stack', () => {
        let stack = new Stack();
        expect(stack.top).toBeFalsy();
    })
})