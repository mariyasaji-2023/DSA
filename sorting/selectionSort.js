// function selectionSort (arr){
//     for(let i=0;i<arr.length;i++){
//         let small = i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[small]>arr[j]){
//                 small = j
//             }
//          }
//          let temp = arr[small]
//          arr[small] = arr[i]
//          arr[i] = temp
//     }
//     return arr
// }
// let arr =[1,4,3,2,4]
// console.log(selectionSort(arr));

function selectionSort(arr){
    for(let i = 0;i<arr.length;i++){
        let small = i
        for(let j=i+1;j<arr.length;j++){
            if(arr[small]>arr[j]){
                small  = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[small]
        arr[small] = temp
    }
    return arr
}
const arr = [2,7,6,8,1]
console.log(selectionSort(arr));