// function linear(arr,target){
//     for (let i=0;i<=arr.length;i++){
//       if(arr[i] === target){
//         return i;
//       }
//     }
//     return -1;
//   }
  
//   const array = [1,2,3,4,5,6];
//   console.log(linear(array,5));

function find(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return arr[i]
        }
    }
    return -1
}
const arr =[1,2,3,4,5,6,7,8,9]
console.log(find(arr,8));