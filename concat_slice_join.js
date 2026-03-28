// concat()
// used to join (merge) two or more arrays into a new array.

let classA = ['Ramin', 'Kutub'];
let classB = ['Monir', 'Rumon'];
let allClass = classA.concat(classB);

console.log(allClass);

// [ 'Ramin', 'Kutub', 'Monir', 'Rumon' ]

const a = [1];
const b = [2];
const c = [3];
let total = a.concat(b, c);

console.log(total);

// [ 1, 2, 3 ]


// slice()
// used to extract (copy) a portion of an array into a new array.

let numbers = [10, 20, 30, 40, 50, 60];

let newNumber = numbers.slice(2, 6);

console.log(newNumber);

// [ 30, 40, 50, 60 ]


let color = ['Red', 'Blue', 'Green', 'Pink'];

let newPath = color.slice(1, 3);

console.log(newPath);

// [ 'Blue', 'Green' ]


// join()
// used to convert an array into a string by joining all elements.

let mySelf = ['I', 'want', 'be', 'a', 'good', 'developer'];

let finalSay = mySelf.join();

console.log(finalSay); // I,want,be,a,good,developer

let num = [ 2, 4, 6, 8, 10];

let finalNum = num.join("");

console.log(finalNum); // 246810