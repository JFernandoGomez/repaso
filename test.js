/*
Array Addition I
Have the function
ArrayAdditiont (arr) take the
array of numbers stored in arx and
return the string true if any
combination of numbers in the array
(excluding the largest number) can be
added up to equal the largest number
in the array, otherwise return the
string false. For example: if arr
contains [4, 6, 23, 10, 1, 3] the output
should return true because 4 + 6 + 10
+3 = 23. The array will not be empty,
will not contain all the same
elements, and may contain negative
numbers,
*/

const a = [4, 6, 23, 10, 1, 3, 0, -1]

// const b = [999, 1, 2, 3, 4, 5, ...];

console.log(a.sort(
  (a, b) => {
    if(a > b) {
      return 1
    } else if (a < b){
      return -1
    }
    // iguales 
    return 0
  } 
))

const largestNumber = a.pop()
//console.log(largestNumber, a)
var totalMinusLargest = 0
a.forEach(element => {
  totalMinusLargest = totalMinusLargest + element
});
console.log(totalMinusLargest)

if(totalMinusLargest === largestNumber){
  console.log( "true", true)
} else {
  console.log( "false")
}

