// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

/**
 *  data = [];
 *  [0, ... Infinity]
 *  store minimum number of ways to make change with given coin values
 *  subtract current amount from coin # to find least # of ways by DP
 *  
 *  take minimum of data[i - coin], or data[i]
 *  if value can't be made into change and data[i] is not replaced, it will still be infinity
 *  Input: coins = [2], amount = 3
 * 
 *  return condition: if data[i] is still Infinity return -1 else return last element value
 */

 var coinChange = function(coins, amount) {
    let data = new Array(amount + 1).fill(Infinity);
    data[0] = 0;
    for(let i = 1; i <= amount; i++) {
        for(let coin of coins) {
            if(i - coin >= 0) {
                // 0
                data[i] = Math.min(data[i], data[i - coin] + 1);
            }
        }
    }
    
    return data[amount] === Infinity ? -1 : data[amount];
};

// Time: O(n) based on amount value
// Space: O(n) based on amaount value to create array to store DP data