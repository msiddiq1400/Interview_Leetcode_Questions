var longestPalindrome = function(s) {
    let sArray = s.split('');
    let maxLength = 0;
    let out = '';
    for(let i=0; i<=sArray.length; i++) {
        for(let j=1; j<=sArray.length; j++){
            let temp = sArray.slice(i,j)
            if(temp.length > 0 && checkIfPalindrom(temp)) {
                if(j - i > maxLength) {
                    maxLength = j - i
                    out = temp.join('')
                }
            }
        }
    }
    return out
};

var checkIfPalindrom = function(s) {
    for(let i=0; i<Math.floor(s.length/2); i++) {
        if(s[i] !== s[s.length - i - 1]) {
            return false
        }
    }
    return true;
}