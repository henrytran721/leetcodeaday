/**
 * Implement a method to perform basic string compression using the counts of repeated characters. For example, aabccccaaa would become a2b1c5a3. If the "compressed string" would not become smaller than the original string, method should return the original string. Assume upper and lowercase letters. 
 */

 function strCompress(s) {
    if(s.length <= 1) return s;
    let compress = '';
    let charCount = 1;
  
    for(let i = 0; i < s.length; i++) {
      if(s[i] !== s[i + 1]) {
        compress = compress + s[i] + charCount;
        charCount = 1;
      } else {
        charCount++;
      }
    }
  
    return compress.length < s.length ? compress : s;
  } 
  
  console.log(strCompress('abbbb'));
  
  // O(n + c^2); // character count creates another loop for each sequence 
  // Space: O(n) depends on how short or long of initial string