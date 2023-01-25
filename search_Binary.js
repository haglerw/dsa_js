/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
    let first = 0;
    let last = nums.length - 1;

    while(first <= last) {
        let middle = Math.floor((first + last)/2);
        if(nums[middle] === target) return middle;
        if(target < nums[middle]) last = middle - 1;
        else first = middle + 1;
    }

    return -1;
};

console.log(search([1,3], 1));
