function sortedFrequency(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let first = -1;
    let last = -1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (arr[middle] === num) {
            first = middle;
            right = middle - 1;  
        } else if (arr[middle] < num) {
            left = middle + 1;
        } else {
            right = middle - 1;  
        }
    }

    if (first === -1) return 0;

    left = 0;
    right = arr.length - 1;
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (arr[middle] === num) {
            last = middle;
            left = middle + 1;
        } else if (arr[middle] < num) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return last - first + 1;
}

module.exports = sortedFrequency