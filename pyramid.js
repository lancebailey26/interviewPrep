//Pyramids
//draw a pyramid of (n) levels using #
//EXAMPLE: pyramid(1)
//          "#"
//          pyramid(2)
//          " # "
//          "###"
//          pyramid(3)
//          "  #  "
//          " ### "
//          "#####"

function pyramid(n){
    //find the midpoint
    const midpoint = Math.floor((2 * n - 1) / 2)
   //loop thru rows
    for(let r = 0; r < n; r++){
        //empty string
        let level = '';
        //loop thru columns
        for (let c = 0; c < 2*n-1; c++){
            //if midpoint - row is <= column && midpoint + row is >= column, add #
            if(midpoint - r <= c && midpoint + r >= c){
                level += '#'
            }else{
                //otherwise add space
                level += ' '
            }
        }
        console.log(level)
    }
}

//Notes:
//  This also works in a matrix similar to steps.js