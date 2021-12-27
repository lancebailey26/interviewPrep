//Palindrome
//EXAMPLE: palindrome('hannah') === true
//         palindrome('racecar') === true
function palindrome(str) {
    //split string to array, reverse array, join array to string
    var reversed = str.split("").reverse().join("");
    //if reversed string == first string, return true, if not, not a palindrome, return false.
    if (reversed == str) {
      return true;
    } else {
      return false;
    }
  }