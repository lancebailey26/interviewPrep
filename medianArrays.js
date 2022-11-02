// Median Arrays
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// EXAMPLE 1: 
    // Input: nums1 = [1,3], nums2 = [2]
    // Output: 2.00000
    // Explanation: merged array = [1,2,3] and median is 2.
// EXAMPLE 2:
    // Input: nums1 = [1,2], nums2 = [3,4]
    // Output: 2.50000
    // Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

    const findMedianSortedArrays = function(nums1, nums2) {
        // concat arrays and sort 
        const arr = nums1.concat(nums2).sort(function(a,b) {
            return a-b;
        });
        // store original array length
        const oL = arr.length;
        let median;
        // if original array is even, you'll return the sum of 2 numbers divided by 2
        if(oL % 2 === 0) {
            while(arr.length > 2) {
                arr.shift();
                arr.pop();
            }
            median = (arr[0] + arr[1]) / 2 
        }else{
        // else you'll return the median of the array
            while(arr.length > 1) {
                arr.shift();
                arr.pop();
            }
            median = arr[0]
        }
        return median;
    };

    console.log(findMedianSortedArrays([1,2], [3,4]))