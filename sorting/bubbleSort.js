// function bubblesort(arr){
//     for(let i =0; i<arr.length-1;i++){
//         for(let j=0;j<arr.length-1;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j]
//                 arr[j] =arr[j+1]
//                 arr[j+1]=temp
//             }
//         }
//     }
//     return arr
// }
// let arr = [2,4,5,3,6,4]
// console.log(bubblesort(arr));


function bubblesort(arr){
    for(let i= 0;i<arr.length-1; i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

const arr = [5,6,8,3]
console.log(bubblesort(arr));