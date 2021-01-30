const {Edge, Vertex, Graph} = require('./graph.js');

describe('graph testing', () => {
    it('happy path', () => {
        const graph = new Graph();

        const A = graph.addVertex('A');
        const B = graph.addVertex('B');
        const C = graph.addVertex('C');
        const D = graph.addVertex('D');
        const E = graph.addVertex('E');
        // console.log(graph.adjacencyList);
        
        expect(graph.adjacencyList.get(A)).toBeTruthy();
    
    let addedEdges = graph.addEdge(A, B);
    graph.addEdge(A, D);
    graph.addEdge(A, C);
    graph.addEdge(B, E);
    graph.addEdge(B, D);
    graph.addEdge(D, C);
        expect(addedEdges).toBeTruthy();
        expect(graph.size(A)).toEqual(5);

        expect(graph.getNeighbors(A)).toEqual([{vertex: {value: 'B'}, weight: 0}, {vertex: {value: 'D'}, weight: 0}, {vertex: {value: 'C'}, weight: 0}])
    expect(graph.breadthFirst(A)).toEqual('ABDCE');
    expect(graph.recursiveDepthFirst(A)).toEqual('ABEDC');
    })
})