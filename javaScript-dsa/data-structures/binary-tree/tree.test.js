'use strict';

const Tree = require('./trees.js');
const Node = require('./node.js');

describe('testing trees', () => {
    it('PreOrder', () => {
        const tree = new Tree();
        const node1 = new Node(1);
        const node2 = new Node(2);
        const node3 = new Node(3);
        const node4 = new Node(4);

        tree.root = node1;
        tree.root.leftChild = node2;
        tree.root.rightChild = node3;
        tree.root.rightChild.leftChild = node4;
        expect(tree.preOrder(tree.root)).toEqual([1,2,3,4]);
    })
    it('PostOrder', () => {
        const tree = new Tree();
        const node1 = new Node(1);
        const node2 = new Node(2);
        const node3 = new Node(3);
        const node4 = new Node(4);

        tree.root = node1;
        tree.root.leftChild = node2;
        tree.root.rightChild = node3;
        tree.root.rightChild.leftChild = node4;
        expect(tree.postOrder(tree.root)).toEqual([2,4,3,1]);
    })
    it('PostOrder', () => {
        const tree = new Tree();
        const node1 = new Node(1);
        const node2 = new Node(2);
        const node3 = new Node(3);
        const node4 = new Node(4);

        tree.root = node1;
        tree.root.leftChild = node2;
        tree.root.rightChild = node3;
        tree.root.rightChild.leftChild = node4;
        expect(tree.inOrder(tree.root)).toEqual([2,1, 4, 3]);
    })
    it('Breadth', () => {
        const tree = new Tree();
        const node1 = new Node(1);
        const node2 = new Node(2);
        const node3 = new Node(3);
        const node4 = new Node(4);

        tree.root = node1;
        tree.root.leftChild = node2;
        tree.root.rightChild = node3;
        tree.root.rightChild.leftChild = node4;
        expect(tree.breadth(tree.root)).toEqual([[1],[2,3],[4]]);
    })
    it('Max Value', () => {
        const tree = new Tree();
        const node1 = new Node(1);
        const node2 = new Node(2);
        const node3 = new Node(3);
        const node4 = new Node(4);

        tree.root = node1;
        tree.root.leftChild = node2;
        tree.root.rightChild = node3;
        tree.root.rightChild.leftChild = node4;
        expect(tree.findMaximumValue(tree.root)).toEqual(4);
    })
})