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