//Max Character
//Return the most commonly occouring character in a string.
//EXAMPLE: maxChar('hello') === 'l'
//         maxChar('lance 11112) === '1'

function maxChar(str) {
    // create object for map
    const chars = {};
    //helpers for later loop
    var character = "";
    var totalMax = 0;
    //make map of string, key value pairs for each letter
    for (let char of str) {
      //if no key, create key
      if (!chars[char]) {
        chars[char] = 1;
        //if key, add +1 to value
      } else {
        chars[char]++;
      }
    }
    //iterate thru map
    for (let char in chars) {
      //if character appears more than total max times, set it to max
      if (chars[char] > totalMax) {
        character = char;
        totalMax = chars[char];
      }
    }
    //i made the output look fancy, but the result is right.
    return "the character " + character + " appears " + totalMax + " times.";
  }
  