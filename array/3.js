const mountain = [1,4,3,8,5]

var findPeaks = function(mountain) {
    let arr =[]
    for(i=0;i<mountain.length;i++){
        if(mountain[i]>mountain[i-1] && mountain[i]>mountain[i+1]){
            arr.push(i)

        }
    }
    return  arr
};

console.log(findPeaks(mountain));