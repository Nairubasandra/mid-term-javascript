# mid-term-javascript
# SECTION A
NO.1 B
NO.2 C
NO.3 B
NO.4 B
NO.5 B
NO.6 A
NO.7 A
NO.8 C

# SECTION  B 
NO.1
const uses block scope and it cannot be redeclared and not reassigned forexample const x = 20;
x = 20; // its shows an error because the variable const cannot be reassigned
let is a block scoped and can be reassigned forexample let y = 5;
y = 10; this gives a good output because let can be reassigned
var uses function scope and can be reassigned forexample varx = 10;
console.log(x); it gives output 10 because var can be reassigned

NO.2
A javascript object is a collection of key value pairs where each pair is a string and the value can be of any type .
An object can be used to store related data e.g
let person = {
    name = "Ben";
    age = 20;
    isunemployed = false
};
Anarray is an ordered collection of values where each value can be of any type e.g
letNum = {1,2,3,4}


NO.3
== Compares values and allows type conversion while === compares both the values and the type without conversion

NO.4
An event in java script is an occurance that can be detected forexample when a user interacts with a web page
forexample
const button = document.getElementById('myButton');
function handleClick() {
  alert('Button was clicked!');
}
button.addEventListener('click', handleClick);

NO.5
The forEach() and map() methods are both used to iterate over elements in an array in JavaScript, but they serve different purposes and have different behaviors.The forEach() method executes a provided function once for each element in the array, but it does not return a new array while The map() method iterates over each element in an array but creates a new array after caling the given function
