function mergeSort(array) {
    if (array.length <= 1) {
      return array;
    }
    const middle = Math.floor(array.length / 2);
    const firstHalf = array.slice(0, middle);
    const secondHalf = array.slice(middle,array.length);
    return jointArray(mergeSort(firstHalf), mergeSort(secondHalf));
  }
  
  function jointArray(firstHalf, secondHalf) {
    const newArray = new Array(firstHalf.length + secondHalf.length).fill(0);
    let i = 0;
    let j = 0;
    let k = 0;
  
    while (i < firstHalf.length && j < secondHalf.length) {
      if (firstHalf[i] <= secondHalf[j]) {
        newArray[k] = firstHalf[i];
        i++;
        k++;
      } else {
        newArray[k] = secondHalf[j];
        j++;
        k++;
      }
    }
  
    while (i < firstHalf.length) {
      newArray[k] = firstHalf[i];
      k++;
      i++;
    }
    while (j < secondHalf.length) {
      newArray[k] = secondHalf[j];
      k++;
      j++;
    }
    return newArray;
  }
  
  function main() {
    const array = [12, 3, 4, 1, 76, 453, 234, 2, 297, 89];
    console.log('Original array is :', array);
    const result = mergeSort(array);
    console.log('Sorted array is :', result);
  }
  
  main();
  


