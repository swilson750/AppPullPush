/*
Your friend is working on a function called multiplesOfSeven which returns an
array containing all integers below that number that are multiples of seven
(for example: 7, 14, 21, etc...). The array should be ordered from smallest to
highest. Unfortunately, the code is not working correctly. Help them fix it!
*/

function multiplesOfSeven(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    if (i % 7 === 0) {
      arr.push(i);
  
  
    }

} 
  
  return arr;
}

// Expected return values
// console.log(multiplesOfSeven(1));
// //=> []
// console.log(multiplesOfSeven(7));
// //=> [ 7 ]
// console.log(multiplesOfSeven(15));
// //=> [ 7, 14 ]
// console.log(multiplesOfSeven(85));
// //=> [ 7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = multiplesOfSeven;
