// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

// Find and return the maximum profit you can achieve.


// Multiple transactions to get a overall profit


var maxProfit = function(prices) {
    let profit = 0;
    
    for(let i = 1; i < prices.length; i++) {
        // look forward if price is larger than subtract
        if(prices[i] > prices[i - 1]) {
            profit += (prices[i] - prices[i - 1]);
        }
    }
    
    return profit;
};

// Time: O(n)
// Space: O(1)