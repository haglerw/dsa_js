function search(arr, val) {
    let minIndex = 0;
    let maxIndex = arr.length - 1;

    while (minIndex <= maxIndex) {
        let middleIndex = Math.floor((minIndex + maxIndex) / 2);
        const currentValue = arr[middleIndex];

        if (currentValue < val) {
            minIndex = middleIndex + 1;
        } else if (currentValue > val) {
            maxIndex = middleIndex - 1;
        } else {
            return middleIndex;
        }
    }

    return -1;
}

search([1, 2, 3, 4, 5, 6], 11);