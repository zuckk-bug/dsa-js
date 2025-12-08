export class MaxHeap {
    constructor(){
        this.heap = []
    }

    getLeftChildIndex(parentIndex){
        return ((2 * parentIndex) + 1); 
    } 

    getRightChildIndex(parentIndex){
        return ((2 * parentIndex) + 2);
    }

    getParentIndex(childIndex){
        return (Math.floor((childIndex - 1) / 2));
    }

    hasParent(index)
    { 
        return this.getParentIndex(index) >= 0; 
    }
    hasLeftChild(index)
    { 
        return this.getLeftChildIndex(index) < this.heap.length; 
    }
    hasRightChild(index) 
    { 
        return this.getRightChildIndex(index) < this.heap.length; 
    }

    insert(value){
        this.heap.push(value);
        let lastIndex = (this.heap.length - 1);
        this.heapifyUp(lastIndex);
    }

    heapifyUp(index){
        let parentIndex = this.getParentIndex(index);
        while(index > 0 && this.heap[index] > this.heap[parentIndex]){
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
            parentIndex = this.getParentIndex(index)
        }
    }

    extract(){
        if(this.heap.length < 1 ) return null; 

        let root = this.heap[0];
        let lastIndex = (this.heap.length - 1);

        [this.heap[0], this.heap[lastIndex]] = [this.heap[lastIndex], this.heap[0]];

        this.heap.pop();
        this.heapifyDown(0);

        return root;
    }

    heapifyDown(index){
        let leftChildIndex = this.getLeftChildIndex(index);
        let rightChildIndex = this.getRightChildIndex(index);
        let lengthOfHeap = this.heap.length;

        let largest = index;

        if(leftChildIndex < lengthOfHeap && this.heap[leftChildIndex] > this.heap[largest]){
            largest = leftChildIndex;
        }
        if(rightChildIndex < lengthOfHeap && this.heap[rightChildIndex] > this.heap[largest]){
            largest = rightChildIndex;
        }
        if(largest !== index){
            [this.heap[largest], this.heap[index]] = [this.heap[index], this.heap[largest]];
            this.heapifyDown(largest);
        }
    }

    peek(){
        if(this.heap.length > 0){
            return this.heap[0];
        }
    }

}