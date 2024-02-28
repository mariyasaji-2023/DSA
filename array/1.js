// const array=[1,2,3,4]
// const t= 7

// var sum = function (array,t){
//     for(let i=0;i<array.length-1;i++){
//         for(let j=i+1;j<array.length;j++){
//             if(array[i]+array[j]===t){
//                 console.log([array[i],array[j]]);
//             }
//         }
//     }
// }
// sum(array,t)


// Another way

const arr = [1, 2, 6, 6, 4];
const t = 3;

var TwoNumberSum = function (arr, t) {
  let hashTable = {};

  for (let i = 0; i < arr.length; i++) {
    const value = t - arr[i];

    if (hashTable[value] != undefined) {
      console.log([arr[i], value]);
      return
    }

    hashTable[arr[i]] = true;

  }
  console.log([]);
}

TwoNumberSum(arr,t);

