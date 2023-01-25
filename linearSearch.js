function search(arr, value) {
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) return i;
    }

    return -1;
}

search([5, 8, 1, 100, 12, 3, 12], 100);