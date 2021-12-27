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