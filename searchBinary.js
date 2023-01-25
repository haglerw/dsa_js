// function binarySearch(arr, value) {
//     if(arr.length === 0) return -1;

//     let leftPointer = 0;
//     let rightPointer = arr.length - 1;
//     let middlePointer = Math.floor((leftPointer+rightPointer) / 2);
    
//     while (arr[middlePointer] !== value && leftPointer <= rightPointer) {
//         if (value < arr[middlePointer]) {
//             rightPointer = middlePointer - 1;
//         } else {
//             leftPointer = middlePointer + 1;
//         }
//         middlePointer = Math.floor((leftPointer+rightPointer) / 2);        
//     }

//     if (arr[middlePointer] === value) return middlePointer;

//     return -1;
// }

// // binarySearch([1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19], 1);
// binarySearch([1, 3], 1);

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let first = 0;
    let last = nums.length - 1;
    let middle = Math.floor((first + last)/2);

    while(nums[middle] != target && first <= last) {
        if(target < nums[middle]) first = middle - 1;
        else last = middle + 1;
        middle = Math.floor((first + last)/2);
    }

    return nums[middle] === target ? middle : -1;
};

var result = search([-1,0,3,5,9,12], 9);
console.log(result);