// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 
// Input: prices = [7,1,5,3,6,4]
// Output: 5



var maxProfit = function(prices) {
    let max = 0;
    for(let i = 0; i < prices.length; i++) {
        for(let j = i + 1; j < prices.length; j++) {
            if(prices[j] - prices[i] > max) {
                max = prices[j] - prices[i];
            }
        }
    }
    
    return max;
};

// Time O(n^2)
// Space: O(1)




var maxProfit = function(prices) {
    let min = prices[0];
    let max = 0;
    for(let i = 1; i < prices.length; i++) {
        if(prices[i] < min) {
            min = prices[i];
        }
        
        if(max < prices[i] - min) {
            max = prices[i] - min;
        }
    }
    
    return max;
};

// Time: O(n)
// Space: O(1)


// use math.max instead of if statement
var maxProfit = function(prices) {
    if(prices.length === 1) return 0;
    
    let min = Infinity;
    let max = 0;
    
    for(let i = 0; i < prices.length; i++) {
        // find minimum value seen so far
        if(prices[i] < min) {
            min = prices[i];
        }
        // find max profit of values ahead of min value
        max = Math.max(max, prices[i] - min);
    }
    
    return max;
};