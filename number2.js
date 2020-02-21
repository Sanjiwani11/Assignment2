// Write a JavaScript program to get a random element from an array.
// Example: [3, 7, 9, 11] => 9

var arr = [3,7,8,9,10];
let x = Math.floor(Math.random() * arr.length);    // math.floor gives a interger value, math.random gives a random 
                                                    //length gives the length of array
console.log(arr[x]);




