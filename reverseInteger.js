var reverse = function(x) {
    const min = Math.pow(-2, 31);
    const max = Math.pow(2, 31) - 1;
    
    if(x < 0) {
        x = parseInt(x.toString().split('').slice(1).reverse().join('')) * -1;
    } else if(x > 0) {
        x = parseInt(x.toString().split('').reverse().join(''));
    }
    
    if(x < min || x > max) {
        return 0;
    }
    
    return x;
};