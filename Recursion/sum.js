// function sum(arr){
//     if(arr.length === 0){
//       return 0;
//     }else{
//       return arr[0]+sum(arr.slice(1));
//     }
//   }
  
//   const arr = [5,10,15,20,25];
//   console.log(sum(arr));
  

function sum(arr){
    if(arr.length === 0){
        return 0
    }else{
        return arr[0]+sum(arr.slice(1))
    }
}

const arr =[3,4,6,7,5,2]
console.log(sum(arr));