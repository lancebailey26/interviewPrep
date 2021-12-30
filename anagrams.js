//Anagrams
//Check if two provided strings are anagrams
//Only consider characters, uppercase == lowercase, not spaces.
//EXAMPLE: anagrams('rail safety', 'fairy tales') === true
//         anagrams('RAIL! SAFETY!', 'fairy tales') === true
//         anagrams('Hi there', 'bye there') === false

function anagrams(stringA, stringB){
//charmaps of words
 const aCharMap = buildCharMap(stringA)
 const bCharMap = buildCharMap(stringB)

 //sanity check, if keys are different length, not an anagram
    if(Object.keys(aCharMap).length != Object.keys(bCharMap).length){
        return false
    }

//iterate over map, if no match, or the count is not the same, return false
for(let char in aCharMap){
    if (aCharMap[char]!= bCharMap[char]){
        return false
    }
}
//if everything matches, return true
return true
}

//helper function to build charmaps
function buildCharMap(str){
    const charMap = {};
    for(let char of str.replace(/[^\w]/g, '').toLowerCase()){
     charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap
}
