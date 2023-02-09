function moveZeroes(nums) {
    let j = 0; // first index
    let i = 1; // second index
    
    while (i < nums.length) { //while i < length of array 
        if (nums[j] === 0 && nums[i] !== 0 ) { // if the first index is 0 and the                                                   second index is not equal to zero
            nums[j] = nums[i] // replace 0 at that index with next non-zero num
            nums[i] = 0 // let second pointer become the 0 from last index
            j++ // move up the first pointer
        }
        if (nums[j] !== 0) { // if the first pointer isnt 0 keep move pointer 
            j++
        }
        i++ // stop looping when second pointer reaches the end
    }
    
};

