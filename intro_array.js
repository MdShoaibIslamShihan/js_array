/*... Array ...*/

// An array is a special variable that can store multiple values in a single variable.

let fruits = ['Apple', 'Orange', 'Guava', 'Strawberry', 'Mango']
console.log(fruits);  // [ 'Apple', 'Orange', 'Guava', 'Strawberry', 'Mango' ]

console.log(fruits[0]);  // Apple
console.log(fruits[3]);  // Strawberry

// changing the valu of array

let car = ['Audi', 'Toyota', 'Honda', 'Tesla']
car[2] = 'Hyundai';

console.log(car);  // [ 'Audi', 'Toyota', 'Hyundai', 'Tesla' ]


let color = ['Red', 'Yellow', 'Blue', 'Green']

color[3] = 'Skyblue';
color[2] = 'Pink';

console.log(color);  // [ 'Red', 'Yellow', 'Pink', 'Skyblue' ]


// Real life example

let students = ['Atik', 'Nasir', 'Mohon', 'Rasel'];
console.log("frist student: " + students[0]);
console.log("Total students: " + students.length);

/*
frist student: Atik
Total students: 4
*/