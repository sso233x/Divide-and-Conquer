function findRotationCount(arr) {
    let left = 0;
    let right = arr.length -1;
    while(left <= right){
        let middle = Math.floor((left + right)/2)
        if(middle > 0 && arr[middle] < arr[middle] -1) return middle;
        if(arr[left] <= arr[middle]){
            left = middle + 1;
        } else{
            right = middle - 1;
        }
    }
    return 0;
}

module.exports = findRotationCount