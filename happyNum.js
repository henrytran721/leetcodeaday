var isHappy = function(n) {
    // to string and split digits
    // change characters back to numbers
    // square and add them
    // end loop when n = 1 or number has been seen
    
    let set = new Set();
    set.add(n);
    
    while(n !== 1) {
        n = n.toString().split('').map((num) => parseInt(num));
        
        let sum = 0;
        for(let num of n) {
            sum += (num * num);
        }
        n = sum;
        if(set.has(n)) {
            return false;
        }
        set.add(n);
    }
    
    return true;
};