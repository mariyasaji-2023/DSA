// function quickSort(array, low, high) {
//     if (low < high) {
//         const pivotIndex = pivotPartition(array, low, high);
//         quickSort(array, low, pivotIndex - 1);
//         quickSort(array, pivotIndex + 1, high);
//     }
//     return arr
// }

// function pivotPartition(array, low, high) {
//     const pivot = array[high];
//     let i = low - 1;
//     for (let j = low; j < high; j++) {
//         if (array[j] <= pivot) {
//             i++;
//             [array[i], array[j]] = [array[j], array[i]];
//         }
//     }
//     [array[i + 1], array[high]] = [array[high], array[i + 1]];
    
//     return i + 1;
// }



// let arr = [2,4,6,7,3,1,6,9]
// console.log(quickSort(arr,0, arr.length - 1));


function quickSort(arr,low,high){
    if(low<high){
        const pivotIndex = pivotpartition(arr,low,high)
        quickSort(arr,low,pivotIndex-1)
        quickSort(arr,pivotIndex+1,high)
    }
    return arr
}

function pivotpartition(arr,low,high){
    const pivot = arr[high];
    let i =low - 1
    for(let j = low; j < high; j++){
        if(arr[j] <= pivot){
            i++;
            [arr[i],arr[j]] = [arr[j],arr[i]];
        }
    }
    [arr[i+1],arr[high]] = [arr[high],arr[i+1]]
    return i+1
}

let arr = [2,4,6,7,3,1,9]

console.log(quickSort(arr,0, arr.length - 1));