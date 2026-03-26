// for loop

let capital = ['Canberra', 'Ottawa', 'Berlin', 'Paris', 'Tokyo']

for (i = 0; i < capital.length; i++) {
    console.log(capital[i]);
}

/*
Canberra
Ottawa
Berlin
Paris
Tokyo
 */

// forEach()
// method is used to loop through each element of an array.

let country = ['Germany', 'China', 'Japan', 'Canada', 'Pakistan']

country.forEach( function(con) {
    console.log(con);
});

/*
Germany
China
Japan
Canada
Pakistan
*/

let color = ['red', 'green', 'blue']

color.forEach( function(col) {
    console.log(col);
});

/*
red
green
blue
*/

// map 
// used to create a new array by transforming each element of an existing array.

let name = ['Lubna', 'Jannat', 'Fariha', 'Tasnia']

let s = name.map(function(std) {
    return std;
});

console.log(s);

// [ 'Lubna', 'Jannat', 'Fariha', 'Tasnia' ]


let number = [1, 2, 3, 4];

let newNumber = number.map(function(number) {
    return number + 2;
});
console.log(newNumber);

// [ 3, 4, 5, 6 ]
