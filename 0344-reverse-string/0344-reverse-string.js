
function reverseString (s) {
    let left = 0;
    let right = s.length - 1;
    let mid = Math.ceil(s.length / 2);
    
    while (right >= mid) {
        let temp = s[right];
        s[right] = s[left];
        s[left] = temp;
        left++;
        right--;
    }
    
};