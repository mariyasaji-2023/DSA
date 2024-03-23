class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Helper function to get the parent index of a node
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    // Helper function to get the left child index of a node
    getLeftChildIndex(index) {
        return index * 2 + 1;
    }

    // Helper function to get the right child index of a node
    getRightChildIndex(index) {
        return index * 2 + 2;
    }

    // Helper function to swap two elements in the heap
    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    // Helper function to heapify up (move a node up the heap if necessary)
    heapifyUp(index) {
        let currentIndex = index;
        while (currentIndex > 0 && this.heap[currentIndex] < this.heap[this.getParentIndex(currentIndex)]) {
            this.swap(currentIndex, this.getParentIndex(currentIndex));
            currentIndex = this.getParentIndex(currentIndex);
        }
    }

    // Helper function to heapify down (move a node down the heap if necessary)
    heapifyDown(index) {
        let currentIndex = index;
        let leftChildIndex = this.getLeftChildIndex(currentIndex);
        let rightChildIndex = this.getRightChildIndex(currentIndex);
        let smallestChildIndex = currentIndex;

        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[currentIndex]) {
            smallestChildIndex = leftChildIndex;
        }

        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestChildIndex]) {
            smallestChildIndex = rightChildIndex;
        }

        if (smallestChildIndex !== currentIndex) {
            this.swap(currentIndex, smallestChildIndex);
            this.heapifyDown(smallestChildIndex);
        }
    }

    // Function to insert a new element into the heap
    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
        return value
    }

    remove() {
        if (this.heap.length === 0) {
            return null; // Heap is empty
        }
        
        const minElement = this.heap[0];
        this.heap[0] = this.heap.pop(); // Replace root with the last element
        this.heapifyDown(0); // Restore heap property
        return minElement; // Return the removed minimum element
    }
    // Function to return the minimum element without removing it from the heap
    peek() {
        return this.heap[0];
    }
}

// Example usage:
const inputArray = [4, 10, 3, 5, 1];
const minHeap = new MinHeap();

// Constructing the min heap from the input array
for (let i = 0; i < inputArray.length; i++) {
    minHeap.insert(inputArray[i]);
}

console.log(MinHeap.heap);

console.log(MinHeap.insert(11));
MinHeap.remove()
console.log(MinHeap.heap);

