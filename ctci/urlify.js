
function urlify(s, len) {
    // find number of spaces
    let spaces = (s.trim().split(' ').length - 1) * 2;
    s = s.split('');
    let newIndex = (len - 1) + spaces;
    if(newIndex + 1 < s.length) s[newIndex + 1] = '/0';
    console.log(s);
    for(let i = len - 1; i >= 0; i--) {
      if(s[i] === ' ') {
        console.log(newIndex);
        s[newIndex] = '0';
        s[newIndex - 1] = '2';
        s[newIndex - 2] = '%';
        newIndex -= 3;
      } else {
        console.log(newIndex);
        s[newIndex] = s[i];
        newIndex--;
      }
    }
    return s.join('');
  }
  
  
  
  console.log(urlify("Mr John Smith    ", 13));
  