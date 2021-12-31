//Steps
// draw a staircase of # with a positive number (n)
//EXAMPLE: steps(2) 
//         "# "
//         "##"
//         steps(3)
//         "#  "
//         "## "
//         "###"

function steps(n){
  //loop for rows
  for(let r = 0; r < n; r++){
      //empty string
      let stair = ''
    //column loop
      for (let c = 0; c<n; c++){
          //if column <= row, add #
          if(c <= r){
              stair += '#'
          }else{
              //otherwise add a space 
              stair += ' '
          }
      }
      console.log(stair)
  }
  
}

//Notes:
//  This essentially works as a matrix, or a 2D array.
//  Where the column (c) is <= row (r), you place a '#'
//  https://imgur.com/a/LG4j8vw <- visual aid