var findMedianSortedArrays = function(nums1, nums2) {
    let sortedArray = nums1.concat(nums2).sort((a,b) => a - b)
    let half = Math.floor(sortedArray.length/2)
    if (sortedArray.length % 2){
        return sortedArray[half];
    }
    return (sortedArray[half - 1] + sortedArray[half]) / 2.0;
};