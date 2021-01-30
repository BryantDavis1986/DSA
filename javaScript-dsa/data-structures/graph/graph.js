'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}


class Graph {
  constructor() {

    /**
     * Our map keys will be of type Vertex, and the value will be an array of Edges.
     */
    this.adjacencyList = new Map();
  }

  addVertex(value) {

    let newVertex = new Vertex(value);
    // put a new vertex in our map, and intialize our array of edges.
    this.adjacencyList.set(newVertex, []);
    return newVertex;
  }

  // Adds a connection between Vertices
  addEdge(startVertex, endVertex, weight = 0) {

    if (!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)) {
      throw new Error('Invalid Vertices');
    }

    // get all of the edges for our startVertex
    let edges = this.adjacencyList.get(startVertex);
    edges.push(new Edge(endVertex, weight));
    return edges;
  }

  getNeighbors(vertex) {

    // make sure our vertex lives in our graph
    if (!this.adjacencyList.has(vertex)) {
      throw new Error('Invalid Vertex');
    }

    // return the list of neightbors
    return [...this.adjacencyList.get(vertex)];
  }

  breadthFirst(startNode) {

    const queue = [];
    const visited = new Set();

    queue.push(startNode);
    visited.add(startNode);
    let string = `${startNode.value}`;
    // loop as long as the queue has vertices
    while (queue.length) {

      const currentNode = queue.shift();

      let neighbors = this.getNeighbors(currentNode);

      // loop through all the neightbors
      for (let neighbor of neighbors) {

        let node = neighbor.vertex;

        if (visited.has(node)) {
          continue;
        } else {
            string += `${node.value}`
          visited.add(node);
        }

        queue.push(node);
      }

    }

    return string;
  }


  depthFirst(startNode) {

    const stack = [];
    const visited = new Set();
    let currentNode = startNode;

    stack.push(currentNode);

    while (stack.length) {

      visited.add(currentNode);

      const neighbors = this.getNeighbors(currentNode);

      for (let neighbor of neighbors) {
        let node = neighbor.vertex;

        if (!visited.has(node)) {
          // we need to push the children of each neighbor into the stack before the rest of the neighbors,
          //  we should pivot to a recursive solution
          stack.push(node);
        }
      }

      currentNode = stack.pop();
    }

    return visited;
  }

  // this uses the call stack to manage the order in which nodes are visited
  recursiveDepthFirst(startNode) {

    //  Our set of visitedNode
    const visitedNodes = new Set();
    let string = '';
    // our recursive traversal function
    const traverseNeighbors = (vertex, visited) => {
        string += `${vertex.value}`
      visited.add(vertex);

      let neighbors = this.getNeighbors(vertex);
      for (let edge of neighbors) {
        if (!visited.has(edge.vertex)) {
          traverseNeighbors(edge.vertex, visited);
        }
      }
    }

    traverseNeighbors(startNode, visitedNodes);

    // our set of nodes visited in depth first order
    return string;
  }
  size(startNode){
    const visitedNodes = new Set();
    let count = 0;
    // our recursive traversal function
    const traverseNeighbors = (vertex, visited) => {
        count++
      visited.add(vertex);

      let neighbors = this.getNeighbors(vertex);
      for (let edge of neighbors) {
        if (!visited.has(edge.vertex)) {
          traverseNeighbors(edge.vertex, visited);
        }
      }
    }

    traverseNeighbors(startNode, visitedNodes);

    // our set of nodes visited in depth first order
    return count;
  }
}


module.exports = {Edge, Vertex, Graph};