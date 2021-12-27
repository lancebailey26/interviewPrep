//Reverse String
// EXAMPLE: reverse('Hello!') === '!olleH'
function reverse(str) {
    //split string to array, reverse array, join array to string
    return str.split("").reverse().join("");
  }