class maxHeap {
    constructor(){
        this.heap = [];
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return index * 2 + 1;
    }

    getRightChildIndex(index) {
        return index * 2 + 2;
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    heapifyUp(index) {
        let currentIndex = index;
        while (currentIndex > 0 && this.heap[currentIndex] > this.heap[this.getParentIndex(currentIndex)]) {
            this.swap(currentIndex, this.getParentIndex(currentIndex));
            currentIndex = this.getParentIndex(currentIndex);
        }
    }

    heapifyDown(index) {
        let currentIndex = index;
        let leftChildIndex = this.getLeftChildIndex(currentIndex);
        let rightChildIndex = this.getRightChildIndex(currentIndex);
        let largestChildIndex = currentIndex;

        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[currentIndex]) {
            largestChildIndex = leftChildIndex;
        }

        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largestChildIndex]) {
            largestChildIndex = rightChildIndex;
        }

        if (largestChildIndex !== currentIndex) {
            this.swap(currentIndex, largestChildIndex);
            this.heapifyDown(largestChildIndex);
        }
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
        return value
    }

    remove() {
        if (this.heap.length === 0) {
            return null;
        }
        const maxElement = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return maxElement;
    }

    peek() {
        return this.heap[0];
    }
}

const inputArray = [6, 2, 8];
const MaxHeap = new maxHeap();
for (let i = 0; i < inputArray.length; i++) {
    MaxHeap.insert(inputArray[i]);
}

console.log(MaxHeap.heap);

console.log(MaxHeap.insert(11));
MaxHeap.remove();
console.log(MaxHeap.heap);
console.log(MaxHeap.peek());
