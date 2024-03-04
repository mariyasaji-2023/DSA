function binarysearch(arr, target, low = 0, high = arr.length-1) {
    if (low > high) {
        return -1
    }
    let mid = Math.floor((low + high) / 2)
    let value = arr[mid]
    if(target === value){
        return mid
    }else if(target < value){
        return binarysearch(arr,target,low,mid-1)
    }else{
        return binarysearch(arr,target,mid+1,high)
    }
}
let arr = [1,2,3,4,5,6]
console.log(binarysearch(arr,5));