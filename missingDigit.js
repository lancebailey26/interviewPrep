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