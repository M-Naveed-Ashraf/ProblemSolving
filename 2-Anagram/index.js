
// Importing the module
const readline = require("readline-sync");
  
// Enter the strings
let str1 = readline.question('Enter the first String : ');
let str2 = readline.question('Enter the first String : ');

let isAnagram = (str1, str2) => {
    let a = str1.toLowerCase();
    let b = str2.toLowerCase();
    let sortedStr1 = a.split('').sort().join('');
    let sortedStr2 = b.split('').sort().join('');

    return (sortedStr1 === sortedStr2)
}

console.log(isAnagram(str1, str2));