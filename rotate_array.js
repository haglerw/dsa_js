/**
 * @param {number[]} nums - list of numbers to be rotated
 * @param {number} k - steps by which the array should be rotated
 * @return {number[]} - Return the rotated array
 */

// 1st - using pop() and unshift() array methods
function rotate1(nums, k) {
    k = k % nums.length;

    for (let i = 0; i < k; i++) {
        const poppedValue = nums.pop();
        nums.unshift(poppedValue);
    }

    return nums;
}

// 2nd - shifting array elements to the new location
function rotate2(nums, k) {
    let arr = [];
    k = k % nums.length;

    for (let i = 0; i < nums.length; i++) {
        arr[(i+k) % nums.length] = nums[i];
    }

    return arr;
}

rotate2([2,1,4,5,8,5,9,8,0,3,1,2,5,7], 19)