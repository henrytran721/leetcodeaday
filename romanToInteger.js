// Turn roman numerals to integer

var romanToInt = function(s) {
    let dict = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000};
    
    let result = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(dict[s[i]] < dict[s[i + 1]]) {
            result -= dict[s[i]];
        } else {
            result += dict[s[i]];
        }
    }
    
    return result;
};

// O(n) time to loop over string
// O(1) space, hash map is defined subset
// ruby
def roman_to_int(s)
    hash = {"I" => 1, "V" => 5, "X" => 10, "L" => 50, "C" => 100, "D" => 500, "M" => 1000}
    
    result = 0
    s.chars.each_with_index do |el, i| 
        if hash[s[i + 1]].to_i > hash[s[i]].to_i
            result -= hash[s[i]].to_i
        else
            puts hash[el]
            result += hash[s[i]].to_i
        end
    end
    
    return result
end