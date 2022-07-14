// task 1 version 1
let a = [1, 2, 3];
let b = [4, 5, 6];

let message = a.length == b.length ? console.log("valid length of arrays") : console.log("invalid length of arrays");

let resultOne = [];

for (let i = 0; i < 3; i++) {
    elemResult = a[i] * b[i];
    resultOne.push(elemResult);
}

console.log(`First array: ${a}
Second array: ${b}
Result: ${resultOne}`);

// //task 1 version 2

let firstArr = [];
let secondArr = [];

let lenFirstArr = Number(prompt("Enter the lenght of your first array"));

let lenSecondArr = Number(prompt("Enter the lenght of your second array"));

if (lenFirstArr != lenSecondArr) {
    lenSecondArr = Number(
        prompt("For product of arrays their lengths should be equal. Enter the length of your second array")
    );
}

for (let i = 0; i < lenFirstArr; i++) {
    let elemFirstArr = Number(prompt(`Enter the ${i} element of your first array`));
    firstArr.push(elemFirstArr);
}

for (let i = 0; i < lenSecondArr; i++) {
    let elemSecondArr = Number(prompt(`Enter the ${i} element of your second array`));
    secondArr.push(elemSecondArr);
}

let resultTwo = [];
for (let i = 0; i < lenFirstArr; i++) {
    elemResult = firstArr[i] * secondArr[i];
    resultTwo.push(elemResult);
}

console.log(`First array: ${firstArr}
Second array: ${secondArr}
Result: ${resultTwo}`);

//task 2
let arr = [4, 2, 38, 4, 1, 12, 1, 4];
let uniqSet = new Set();

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++)
        if (arr[j] === arr[i]) {
            uniqSet.add(arr[i]);
        }
}
console.log(Array.from(uniqSet));

//task 3
let word = String(prompt("Enter your word: "));
let letter = String(prompt("Enter your letter: "));
let counter = 0;

for (let i = 0; i < word.length; i++) {
    if (word[i] == letter) {
        counter++;
    }
}
console.log(`The string contains the following number of '${letter}' letter: ${counter}`);
