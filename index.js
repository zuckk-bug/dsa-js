import { log } from 'console';
import { buildAdjList } from './graphs/graphAsList.js'
import { Graph } from './graphs/graphAsList.js'
import { MinHeap } from './heaps/minHeap.js'


let myHeap = new MinHeap();

myHeap.insert(5);
myHeap.insert(20);
myHeap.insert(4);
myHeap.insert(10);
myHeap.insert(1);
myHeap.insert(0);
console.log(myHeap.extract());
console.log(myHeap.extract());


// myHeap = [1,3,5,8,10,9,6,12]
// myHeap.insert(1);
// myHeap.insert(3);
// myHeap.insert(5);
// myHeap.insert(8);
// myHeap.insert(10);
// myHeap.insert(9);
// myHeap.insert(6);
// myHeap.insert(12);
console.log(myHeap);

// myHeap.insert(4);
// console.log(myHeap);

// myHeap.insert(0);
// console.log(myHeap);



// buildAdjList([[0,1], [2,3], [0,4]], 5)

// let graph = new Graph()
// graph.addVertex(0)
// graph.addVertex(1)
// graph.addVertex(2)
// graph.addVertex(3)

// graph.addEdge(0, 1)
// graph.addEdge(0, 2)
// graph.addEdge(1, 2)
// graph.addEdge(2, 3)
// graph.addEdge(3, 0)
// graph.addEdge(3, 2)
// // graph.removeEdge(0, 1)
// console.log(graph.adjacencyList)