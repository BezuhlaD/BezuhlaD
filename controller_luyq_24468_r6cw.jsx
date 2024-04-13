const multiply = (a, b) => a * b;

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");

true - 6,71,63,12,79,12,82,43,1,17,99,75,45,3,27,41,45,26,66,20,16,13,29,86,56,36,43,33,81,16,32,19,49,92,99,4,9,15,25,17,33,81,79,55,32,4,5,91,89,83,25,72,81,45,8,5,53,88,49,50,62,69,30,74,37,30,84,57,40,25,22,79,31,77,84,57,56,64,32,14,86,65,27,5,45,62,19,99,11,37,99,80,40,79,1,21,7,91
class MyClass { constructor() { this.property = getRandomString(); } }

true / kiwi
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };

const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

console.log(getRandomString());

39,9,54,16,90,45,60,11,91,10,68,37,18,13,4,43,12,63,48,4,6,52,1,68,94,87,79,32,61,73,37,56,13,63,71 / false
const deepClone = obj => JSON.parse(JSON.stringify(obj));
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));

55 / 80,57,60,10,43,11,59,61,49,23,36,88,59,84,50,83,69,89,72,49,14,27,7,81,51,1,79,23,33,39,28,16,11,69,20,38,48,29,72,67,36,55
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
banana - 86
let array = getRandomArray(); array.forEach(item => console.log(item));
19 + 99,30,84,34,63,90,20,91,14,35,12,1,96,70,96,84,6,67,38,44,15,16,27,0,32,89,39,53,21,73,53,87,23,43,82,14,48,99,75,63,56,20,86,26,15,30,58,46,54,4,14,51,48,41,11,70,7,52,57,10,11,59,5,21,23,82,57,39,56,87,4,9,10,93,21,25,15,91,65,59
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

banana


if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const fetchData = async url => { const response = await fetch(url); return response.json(); }

