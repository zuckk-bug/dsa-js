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


// graph as list using class


export class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);  
        }
    }

    addEdge(vertex1, vertex2) {
        if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
            this.adjacencyList.get(vertex1).push(vertex2);
        }
    }

    removeEdge(source, destination) {
        if (this.adjacencyList.has(source)) {
            this.adjacencyList.set(
                source, 
                this.adjacencyList.get(source).filter(v => v !== destination)
            );
        }
    }

    removeVertex(vertexToRemove) { 
        if (this.adjacencyList.has(vertexToRemove)) {
            this.adjacencyList.delete(vertexToRemove); 

            
            for (let [vertex, neighbors] of this.adjacencyList) {
                if (neighbors.includes(vertexToRemove)) {
                    this.adjacencyList.set(
                        vertex, 
                        neighbors.filter(v => v !== vertexToRemove)
                    );
                }
            }
        }
    }
}