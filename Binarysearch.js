function binarysearch(arr, target) {
    let low = 0;
    let high = arr.length - 1

    while (low <= high) {
        let mid = Math.floor((low+high)/2)
        let value = arr[mid]
        if(target === value){
            return mid;
        }else if (target < value){
            high = mid-1
        }else{
            low = mid+1
        }
    }
  return -1
}

const arr = [1,2,3,4,5,6,7]
console.log(binarysearch(arr,7));