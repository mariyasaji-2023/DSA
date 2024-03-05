
// function insertionsort(arr) {
//     for (let i = 1; i < arr.length; i++) { // Start loop from index 1
//         let current = arr[i];
//         let j = i - 1; // Adjust j accordingly
//         while (j >= 0 && arr[j] > current) {
//             arr[j + 1] = arr[j];
//             j--;
//         }
//         arr[j + 1] = current;
//     }
//     return arr;
// }

// let arr = [1, 2, 6, 4, 3, 7];
// console.log(insertionsort(arr));

function insertionsort (arr){
    for(i=1;i<arr.length;i++){
        let current = arr[i]
        let j = i-1;
        while(j >= 0 && arr[j] > current ){
            arr[j+1] = arr[j]
            j--;
        }
        arr[j+1] = current
    }
    return arr
}
let arr = [1,3,5,2,3]
console.log(insertionsort(arr));