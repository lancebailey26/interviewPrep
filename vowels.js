//Vowels
//Return # of vowels in a string
//EXAMPLE: vowels('Hi there!) == 3
//         vowels('Why do you ask?') === 4
//         vowels('Why?) === 0

function vowels(str){
    //note vowels
    const vowels = ['a','e','i','o','u'];
    //split str into array
    const split = str.split('');
    //default of 0 vowels
    var total = 0
    //loop thru split
    for(char of split){
        //loop thru vowels
        for(x of vowels){
            //if char of split is a vowel
            if(char == x){
                //add 1 to total
                total= total+1
            }
        }
    }
    return total
}

console.log(vowels('Why?'))