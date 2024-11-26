function findRotatedIndex(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    while(left <= right){
        let middle = Math.floor((left + right)/2);
        if(arr[middle] === num) return middle;
        if(arr[left] <= arr[middle]){
            if(arr[left] <= num && num < arr[middle]){
                right = middle -1;
            } else{
                left = middle + 1;
            }          
        } else{
           if(arr[middle] < num && num <= arr[right]){
            left = middle + 1;
           } else{
            right = middle -1;
           }
        }
    }
    return -1;
}

module.exports = findRotatedIndex