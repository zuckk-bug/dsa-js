import { buildAdjList } from './graphs/graphAsList.js'
import { Graph } from './graphs/graphAsList.js'

buildAdjList([[0,1], [2,3], [0,4]], 5)

let graph = new Graph()
graph.addVertex(0)
graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)

graph.addEdge(0, 1)
graph.addEdge(0, 2)
graph.addEdge(1, 2)
graph.addEdge(2, 3)
graph.addEdge(3, 0)
graph.addEdge(3, 2)
graph.removeEdge(0, 1)
console.log(graph.adjacencyList)