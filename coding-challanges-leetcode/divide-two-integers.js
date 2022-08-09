var divide = function(dividend, divisor) {
    let ans = 0;
    let t1 = Math.abs(dividend)
    let t2 = Math.abs(divisor)
    let sign = null;
    if((dividend > 0 && divisor > 0) || dividend < 0 && divisor < 0) {
        sign = '+'
    } else {
        sign = '-'
    }

    while(t1 > 0) {
        if(t2 === 1) {
            ans = t1
            break;
        }
        
        t1 = t1 - t2
        if(t1 >= 0) {
            ans = ans + 1;
        }
    }

    if(sign === '+' && ans > Math.pow(2,31) - 1) {
        ans =  Math.pow(2,31) - 1
    }

    if(sign === '-' && ans >= Math.pow(2,31) - 1) {
        ans =  Math.pow(2,31)
    }
    
    if(sign === '+') {
        return ans;
    } else {
        return -1 * ans;
    }
};