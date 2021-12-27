function fib(n){
    //first 2 are 1 & 2
    if(n<2){
        return n
    }
    //returns character slot rather than actual math
    return fib(n-1) + fib(n-2)
}

function reverse(str){
    //split string to array, reverse array, join array to string
    return str.split('').reverse().join('')
}

function palindrome(str){
    //split string to array, reverse array, join array to string
    var reversed =  str.split('').reverse().join('')
    //if reversed string == first string, return true, if not, not a palindrome, return false.
    if (reversed == str){
        return true
    } else{
        return false
    }
}
function reverseInt(n) {
//turn int into string, split to array, reverse,  join into new string.
const reversed = n.toString().split('').reverse().join('');
//parse int will handle 0s at beginning of string, and math.sign assigns positive or negative.
return parseInt(reversed) * Math.sign(n)
}

function maxChar(str){
    // create object for map
    const chars = {};
    //helpers for later loop
    var character = '';
    var totalMax = 0;
    //make map of string, key value pairs for each letter
    for (let char of str){
        //if no key, create key
       if(!chars[char]){
           chars[char] = 1
        //if key, add +1 to value
       } else{
           chars[char]++
       }
    }
    //iterate thru map
   for (let char in chars){
       //if character appears more than total max times, set it to max
    if(chars[char]>totalMax){
        character = char
        totalMax = chars[char]
    }
   }
   return ('the character '+character+' appears ' + totalMax + ' times.')
}
function fizzBuzz(n) {
    //create array from 0-n
    const arr = Array.from({length: n+1}, (x, i) => i);
    //new array without 0
    const pop = arr.splice(1)
    //loop thru array without 0
    for(let i = 0; i < pop.length; i++){
        //logic for fizz and buzz
        if (pop[i] % 3 == 0 && pop[i] %5 ==0){
            console.log("FizzBuzz")
        } else if (pop[i] % 3 == 0){
            console.log("Fizz")
        }else if (pop[i]%5==0){
            console.log("Buzz")
        }else{
            //if neither, log number
            console.log(pop[i])
        }
    }
  }

function chunk(array, size){
    //returner array
    const chunked = []
    //index for slice
    var index = 0
    //while index < array.length
    while (index < array.length){
        //slice original array on index and index + size
        var sliced = array.slice(index,index + size)
        //push slice to returner
        chunked.push(sliced)
        //increase index by size
        index+= size
        //repeat loop
    }
    return chunked
}

console.log(chunk([1,2,3,4,5,6],2))