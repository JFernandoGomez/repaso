const str = "tuuuuuuriiiiiiinnnnnng"
var result = str.split('').reduce((result,letter,index) => {
  console.log({index, letter})
  // if(index <= 2){
  //   result += letter;
  //   console.log(result)
  //   return result
  // } else 
  if(
    result[result.length-3] === letter 
    && result[result.length-2] === letter 
    && result[result.length-1]=== letter
  ){
    return result
  } else {
    result += letter;
    console.log(result)
    return result
  }
}, "")
