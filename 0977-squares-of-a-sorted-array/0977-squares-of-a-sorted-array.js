
function sortedSquares (nums) {
    let sqNums = nums.map(num => {
        return num ** 2;
    })
    return sqNums.sort(function(a, b){return a - b});
};