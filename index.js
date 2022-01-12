var str = '6666666666666662';

function Length(str) { // control the card number length is valid
  if (str.length == 16) {
    return true
  }
  return false
}

function Bigger(str) { // control the card number total sum is bigger than 16 
  var sum = 0
  for (var i = 0; i < str.length; i++) {
    sum += parseInt(str[i]) // I send credit car number as a string so I use parseInt to convert from string to number
  }
  if(sum <= 16) {
    return false
  }
  return true
}

function Same(str) { // control all the numbers is same or not
  var i = 0;
    for (let i = 1; i < str.length; i++)
      if (str[i] != str[0]) // take the first index of number and compare with others
        return true;
 
    return false;
    
}

function LastChar(str) { // to control the last char is odd or even
  var last = str.slice(-1); // getting the last index of number
  if(last % 2 == 0) {
    return true
  }
  return false
}

function isNumeric(str) { // to control the card numebr has a non numeric char
    console.log( !isNaN(str - parseFloat(str)))
}

function CardValidation(str) {
  if (Length(str)) {
    if(Bigger(str)) {
      if(Same(str)) {
        if(LastChar(str)) {
          isNumeric(str)
        }
        else {
          console.log('false')
        }
      }
      else {
        console.log('false')
      }
    }
    else {
      console.log('false')
    }
  }
  else {
    console.log('false')
  }
}

CardValidation(str)
