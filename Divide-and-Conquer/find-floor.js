function findFloor(arr, val) {
    let left = 0;
    let right = arr.length - 1;
    let floor = -1
    while(left <= right){
        let middle = Math.floor((left + right)/2);
        if(arr[middle] <= val){
            floor = arr[middle];
            left = middle + 1;
        } else{
            right = middle -1
        }
    }
    return floor;
}

module.exports = findFloor