function searchInsert (nums, target) {
    let start = 0;
    let end = nums.length - 1;

    if (nums.includes(target)) {
        return nums.indexOf(target)
    } else {
        while(start<=end) {
            const mid = Math.floor((start + end)/2);
            
            if(nums[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }   
        }
        return start;
    }
}

 
