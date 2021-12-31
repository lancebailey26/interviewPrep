//Capitalize
//Capitalize the first letter of each word in a string and return it
//EXAMPLE:  capitalize('a short sentece') === 'A Short Sentence'
//          capitalize('a lazy fox') === 'A Lazy Fox'

function capitalize(str){
    //return array
    const words = [];
    //split and iterate thru string 
    for(let word of str.split(' ')){
        //push first letter of each word as uppercase, and rest of word minus first letter
        words.push(word[0].toUpperCase() + word.slice(1))
    }
    //return words joined
   return words.join(' ')
}
