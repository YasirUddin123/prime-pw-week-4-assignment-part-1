console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log(helloName( 'Yasir' ));


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}

// call the function to test
console.log(addNumbers( 3245, 33246 ));


// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3 ){
  return num1 * num2 * num3;
}

// call the function to test
console.log(multiplyThree( 4, 2, 5));


// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else {
    return false;
  }
}
// Call the function to test each outcome (true & false)
console.log(isPositive(54));
console.log(isPositive(0));
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {
  for(let i = 0; i < array.length; i++){
      if(i === array.length - 1){
          return array[i];
      } else if (array.length === 0) {
          return undefined;
      }
   }
}

//call the function to test an array with numbers
console.log(getLast([1,2,3,4,5]));
//call the function to test an array with strings
console.log(getLast(['apples', 'oranges', 'bananas', 'kiwis']));
//call the function to test an array with multiple booleans
console.log(getLast([true, true, false, false]));
//call the function to test an array that has one number
console.log(getLast([1]));
//call the function to test an array that has one string
console.log(getLast(['apples']));
//call the function to test an array that has one boolean
console.log(getLast([true]));
//call the function to test an empty array to return 'undefined'
console.log(getLast([]));


// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){
    for(let i = 0; i < array.length; i++){
        if(array[i] === value){
          return true;
        }
      }
  return false;
}

//call the function to test if a value is in the array
console.log(find(5,[6,4,6,5,4]));
//call the function to test if a value is NOT in the array
console.log(find(10,[5,4,3,2,5,3]));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  for(let i = 0; i < string.length; i++){
      if(string[0] === letter){
          return true
      }
  }
return false;
}

//call the function to test
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );


// 9. Function to return the sum of all numbers in an array
function sumAll( array ) {
  let sum = 0
  for(let i = 0; i < array.length; i++){
  // TODO: loop to add items
    sum += array[i];
  }
  return sum;
}

//call the function to test
console.log(sumAll([1,2,3,4,5,6,7]));
console.log(sumAll([-1,-2,-3,-4,-5,-6,-7]));
console.log(sumAll([]));
console.log(sumAll([10,0,0,0,0,0,0]));
console.log(sumAll([0,10,0,0,0,0,0]));
console.log(sumAll([0,0,10,0,0,0,0]));
console.log(sumAll([0,0,0,10,0,0,0]));
console.log(sumAll([0,0,0,0,10,0,0]));
console.log(sumAll([0,0,0,0,0,10,0]));
console.log(sumAll([0,0,0,0,0,0,10]));


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function positiveArray(array){
  let newArray = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] > 0){
      newArray.push(array[i])
    }
  }
  return newArray;
}

//call the function to test
console.log(positiveArray([1,2,3,4,5,6]));
console.log(positiveArray([3,-2,-1,0,4,5]));
console.log(positiveArray([-1,-2,-3,1,2,3]));
console.log(positiveArray([0,0,0,4,5,6]));
console.log(positiveArray([-1,-2,-3,-4,-5,-6]));
console.log(positiveArray([0,-1,-2,-3,-4,-5,-6]));
console.log(positiveArray([0,0,0,0,0,0]));
console.log(positiveArray([1,2,3,0,0,0]));
console.log(positiveArray([1,2,3,0,0,0,-1,-2,-3]));
console.log(positiveArray([1,2,3,-1,-2,-3]));


// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

// source: https://edabit.com/challenge/XdAR3KohR5w7rjrFg
// Create a function that takes in an array of numbers
// and returns the sum of its cubes.

function sumOfCubes(array){
    let cubed = 0;
    for(let i = 0; i < array.length; i++){
      cubed += array[i]*array[i]*array[i];
    }
    return cubed;
}

//call the function to test
console.log(sumOfCubes([1,2,3]));
console.log(sumOfCubes([-1,-2,-3]));
console.log(sumOfCubes([-1,2,3]));
console.log(sumOfCubes([1,-2,3]));
console.log(sumOfCubes([1,2,-3]));

// ready for submission
