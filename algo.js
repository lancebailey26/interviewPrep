//Fibonacci Sequence
// Print out the n-th entry in the fibonacci series.
function fib(n) {
  //first 2 are 1 & 2
  if (n < 2) {
    return n;
  }
  //returns character slot rather than actual math
  return fib(n - 1) + fib(n - 2);
}

//Reverse String
// EXAMPLE: reverse('Hello!') === '!olleH'
function reverse(str) {
  //split string to array, reverse array, join array to string
  return str.split("").reverse().join("");
}

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

//Reverse Integer
//Return the reverse order of numbers while maintaining an Int
//Note: Maintain rational numbers (ie: -1500 would return -51, not -0051)
//EXAMPLE: reverseInt(204) === 402
//         reverseInt(-15) === -51
//         reverseInt(1500)=== 15
function reverseInt(n) {
  //turn int into string, split to array, reverse,  join into new string.
  const reversed = n.toString().split("").reverse().join("");
  //parse int will handle 0s at beginning of string, and math.sign assigns positive or negative.
  return parseInt(reversed) * Math.sign(n);
}

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

//FizzBuzz
//Everyones Favorite: create an array from 0-n, for each index, if it is divisible by 3, output Fizz, if divisible by 5, output Buzz, if divisible by 3 & 5, output FizzBuzz
//EXAMPLE: fizzBuzz(5) === '1,2,fizz,4,buzz'
function fizzBuzz(n) {
  //create array from 0-n
  const arr = Array.from({ length: n + 1 }, (x, i) => i);
  //new array without 0
  const pop = arr.splice(1);
  //loop thru array without 0
  for (let i = 0; i < pop.length; i++) {
    //logic for fizz and buzz
    if (pop[i] % 3 == 0 && pop[i] % 5 == 0) {
      console.log("FizzBuzz");
    } else if (pop[i] % 3 == 0) {
      console.log("Fizz");
    } else if (pop[i] % 5 == 0) {
      console.log("Buzz");
    } else {
      //if neither, log number
      console.log(pop[i]);
    }
  }
}


//Array Chunk
//Take an array, and chunk it into smaller size arrays.
//EXAMPLE: chunk([1, 2, 3, 4], 2) === [[ 1, 2], [3, 4]]
function chunk(array, size) {
  //returner array
  const chunked = [];
  //index for slice
  var index = 0;
  //while index < array.length
  while (index < array.length) {
    //slice original array on index and index + size
    var sliced = array.slice(index, index + size);
    //push slice to returner
    chunked.push(sliced);
    //increase index by size
    index += size;
    //repeat loop
  }
  return chunked;
}

//Missing Digit
//Solve for x to complete the equation.
//EXAMPLE: missingDigit('20 + x0 = 30') === 1
//         missingDigit('x0 - 50 = 10') === 6
function missingDigit(str) { 
    //split string 
    var split = str.split(' ')
    //set variables
    var x;
    var replace;
    var firstOp;
    var operator;
    var secondOp;
    var resultValue;
    var result;
    //loop and find x and replace value
    for(var i = 0; i < split.length; i++){
      if(split[i].indexOf('x') != -1){
          x = split[i];
          replace = [i];
          }
    //set operator values
      firstOp = +split[0]
      operator = split[1];
      secondOp = +split[2];
      resultValue = +split[4];
    //math based on where x is, if x exists, the number is not an integer
    if(Number.isInteger(firstOp) == false && operator === '+'){
      result = resultValue - secondOp;
      }
    else if(Number.isInteger(firstOp) == false && operator === '-'){
      result = resultValue + secondOp;
      }
    else if(Number.isInteger(firstOp) == false && operator === '*'){
      result = resultValue / secondOp;
      }
    else if(Number.isInteger(firstOp) == false && operator === '/'){
      result = resultValue * secondOp;
      }
    else if(Number.isInteger(secondOp) == false && operator === '+'){
      result = resultValue - firstOp;
      }
    else if(Number.isInteger(secondOp) == false && operator === '-'){
      result = firstOp - resultValue;
      }
    else if(Number.isInteger(secondOp) == false && operator === '*'){
      result = resultValue / firstOp;
      }
    else if(Number.isInteger(secondOp) == false && operator === '/'){
      result = firstOp / resultValue;
      }
    else if(Number.isInteger(resultValue) == false && operator === '+'){
      result = firstOp + secondOp;
      }
    else if(Number.isInteger(resultValue) == false && operator === '-'){
      result = firstOp - secondOp;
      }
    else if(Number.isInteger(resultValue) == false && operator === '*'){
      result = firstOp * secondOp;
      }
    else {
      result = firstOp / secondOp;
      }
    }
    //split x into array, set return variables
    var xArr = x.split('');
    var resultArr = result.toString().split('');
    var xPos;
    var ansPos;
    //find x, replace
    for(var i = 0; i < xArr.length; i++){
      if(xArr[i].indexOf('x') != -1){
        xPos = [i]
      }
    }
    return +resultArr[xPos];       
  }


