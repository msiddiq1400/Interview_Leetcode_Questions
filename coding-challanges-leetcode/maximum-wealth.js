var maximumWealth = function(accounts) {
    let maxWealth = 0;
    for(let i=0; i < accounts.length; i++) {
        let newMaxwealth = accounts[i].reduce((acc, element) => acc + element, 0);
        if(maxWealth < newMaxwealth) {
            maxWealth = newMaxwealth;
        }
    }
    return maxWealth;
};