const rotate = (nums, k) => {
  const n = nums.length;
  k = k % n;

  nums.unshift(...nums.splice(n - k, k));

  return nums;
};
