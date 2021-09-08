// sum number recursively

function sumRange(num) {
    if(num == 1) {
        return 1;
    }

    return num + sumRange(num - 1);
}
                // 3 +  sumRange 2 
                // 2 + sumRange 1
                // 1 


console.log(sumRange(3));