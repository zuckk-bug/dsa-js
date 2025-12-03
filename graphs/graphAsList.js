// Graph as a list
// hacky solution for quick implementation for solving leetcode problems

export function buildAdjList(edges, numberOfNodes){
    let adjList = {}

    for(let edge of edges){
        let source = edge[0]
        let dest = edge[1]

        if(source in adjList){
            adjList[source].push(dest)
        } else {
            adjList[source] = [dest]
        }
    }
        console.log(adjList)
        return adjList
}


// graph usig class


 export class Graph {
    constructor() {
        this.adjacencyList = new Map(); // Stores vertices and their connected neighbors
    }

    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);  
        }
    }

    addEdge(vertex1, vertex2) {
        // Add edge for an undirected graph (connection in both directions)
        if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
            this.adjacencyList.get(vertex1).push(vertex2);
            this.adjacencyList.get(vertex2).push(vertex1);
        }
    }

    removeEdge(vertex1, vertex2) {
        // Remove edge for an undirected graph
        if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
            this.adjacencyList.set(vertex1, this.adjacencyList.get(vertex1).filter(v => v !== vertex2));
            this.adjacencyList.set(vertex2, this.adjacencyList.get(vertex2).filter(v => v !== vertex1));
        }
    }

    removeVertex(vertex) {
        if (this.adjacencyList.has(vertex)) {
            // Remove all edges connected to this vertex
            while (this.adjacencyList.get(vertex).length) {
                const adjacentVertex = this.adjacencyList.get(vertex).pop();
                this.removeEdge(vertex, adjacentVertex);
            }
            this.adjacencyList.delete(vertex); // Remove the vertex itself
        }
    }
}
