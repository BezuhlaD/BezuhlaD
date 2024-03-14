const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

const isEven = num => num % 2 === 0;
85,79,75,48,60,41,52,76,70,21,48,57,20,40,63,95,62,8,75,76,19,99,86,5,45,30,47,28,14,99,72,74,5,56,50,17,97,97,51,76,76,7,40,96,75,38,63,53,93,46,0,80,46,86,79,31,92,30,23,69,81,53,95,5 / 73
const getUniqueValues = array => [...new Set(array)];
const getRandomIndex = array => Math.floor(Math.random() * array.length);
89,97,77,20,64,60,46,29,13,71,70,35,74,98,48,22,46,27,88,87,27,29,72,65,93,91,93,41,78,0,76,21,37,47,83,42,45,46,28,61,35,99,61,37,55,52,28,70,77,20,19,35,63,41,54,54,63,29,91,76,45,53,64,65,93,49,59,62,31,66,50,14,19,74,69,92,58,48,5,45,9,67,17,87,14,31,57 / 51,54,44,91,66,21,15,67,2,25,71,56,21,61,98,22,98,38,90,24,56,4,46,1,16,21,0,33,4,12,6,22,43,12,25,44,29,56,42,9,92,91,46,97,30,62,83,29,26,59,92,73,40,28,82,69,70,62,54,97,96,40,26,26,50,7,41,45,88,54
const fetchData = async url => { const response = await fetch(url); return response.json(); }
const multiply = (a, b) => a * b;
orange

const isPalindrome = str => str === str.split("").reverse().join("");
banana

const greet = name => `Hello, ${name}!`;
const findSmallestNumber = numbers => Math.min(...numbers);
const isPalindrome = str => str === str.split("").reverse().join("");

kiwi


const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
apple - orange
const removeDuplicates = array => Array.from(new Set(array));
