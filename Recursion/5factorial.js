// function factorial(n){
//   if(n<=1){
//     return 1;
//   }else{
//     return n*factorial(n-1);
//   }
// }

// const n=5;
// console.log(factorial(n))




function factorial(n){
  if(n <= 1){
    return 1
  }else{
    return n*factorial(n-1)
  }
}
const n= 2
console.log(factorial(n));