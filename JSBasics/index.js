// 1. Sum values in object arrays

const objects =
{
    food: [10, 20, 30],
    travel: [5, 15],
    bills: [40, 60]
}

const result = {};

for (let key in objects) {
    let sum = 0;
    for (let num of objects[key]) {
        sum += num
    }
    result[key] = sum;
}

console.log(result)


// 2. Count word occurrences in array

const inputTwo = ["apple", "banana", "apple", "orange", "banana", "apple"]


let results = {}

// for (let word of inputTwo) {
//     let counter = 0;
//     for (let j = 0; j < inputTwo.length; j++) {
//         if (word == inputTwo[j]) {
//             counter++;
//         }
//     }
//     results[word] = counter;
// }

// Efficient Approach

for (let word of inputTwo) {
    results[word] = (results[word] || 0) + 1;
}

console.log(results);

// 3. Swap keys and values of object
let input2 = { a: "x", b: "y", c: "z" }

let resultTwo = {};

for (let key in input2) {
    for (let words of input2[key]) {
        resultTwo[words] = key;
    }
}
console.log(resultTwo);

// 4. Find the largest value key

let resultFour = {};
let inputFour = { a: 10, b: 50, c: 20 }

let max = -Infinity;
let maxKey = null
for (let key in inputFour) {
    if (inputFour[key] > max) {
        max = inputFour[key];
        maxKey = key;
    }
}
console.log(maxKey);

// 5. Flatten object of arrays into one array

let inputFive = { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }

let arr = [];

for (let i in inputFive) {
    for (let word of inputFive[i]) {
        arr.push(word);
    }
}

console.log(arr);

// 6. Group people by city

let inputSix = [
    { name: "A", city: "Delhi" },
    { name: "B", city: "Mumbai" },
    { name: "C", city: "Delhi" }
]

let resultSix = {};

for (let person of inputSix) {
    let city = person.city;
    let name = person.name;

    if (!resultSix[city]) {
        resultSix[city] = [];
    }
    resultSix[city].push(name);
}

console.log(resultSix)

// 7. Filter object by values > 50

let inputSeven = { a: 20, b: 60, c: 40, d: 90 };
function isBigEnough(value) {
    return value > 50;
}

let resultSeven = {}

for (let key in inputSeven) {
    if (inputSeven[key] > 50) {
        resultSeven[key] = inputSeven[key];
    }
}
console.log(resultSeven);

// 8. Find student with highest average mark

let inputEight = { A: [80, 90], B: [70, 75, 85] }
let maxAvg = -Infinity;
let avgKey = null;

for (let key in inputEight) {
    let sum = 0;

    for (let value of inputEight[key]) {
        sum += value;
    }

    let avg = sum / inputEight[key].length;

    if (avg > maxAvg) {
        maxAvg = avg;
        avgKey = key;
    }
}

console.log(avgKey);

// 9. Unique values across all object arrays

let inputNine = { x: [1, 2, 3], y: [2, 3, 4], z: [4, 5] }

let arrNine = [];
for (let number in inputNine) {

    for (let value of inputNine[number]) {
        if (!arrNine.includes(value)) {
            arrNine.push(value);
        }
    }
}

console.log(arrNine);

// 10. Pick only given keys from object

let inputTen = { name: "Rahul", age: 23, city: "Noida" }
console.log("name: " + inputTen.name, ", city:" + inputTen.city);

// 11. Sort object entries by values (ascending)

let inputEleven = { a: 3, b: 1, c: 2 }

let resultEven = Object.fromEntries(
    Object.entries(inputEleven).sort((a, b) => a[1] - b[1])
);

console.log(resultEven)

// 12. Count number of keys in object

let inputTwelve = { a: 1, b: 2, c: 3 }

let count = 0;
for (let value in inputTwelve) {
    count++;
}
console.log(count);


// 13. Capitalize string values inside object

let inputThirteen = { name: "alice", city: "delhi" };
let resultThirteen = {};

for (let key in inputThirteen) {
    let value = inputThirteen[key];

    resultThirteen[key] = value.charAt(0).toUpperCase() + value.slice(1);
}

console.log(resultThirteen);

// 14. Convert object to query string

let inputFourteen = { name: "Alice", age: 25 }
console.log("name=" + inputFourteen.name + "&age=" + inputFourteen.age);

//15. Count Even and Odd Number in Array

let inputFifteen = [1, 2, 3, 4, 5, 6];
let Oddcount = 0
let evenCount = 0
inputFifteen.filter((a) => {
    if (a % 2 == 0) {
        evenCount++;
    } else {
        Oddcount++;
    }
})
let resultFifteen = {};
resultFifteen["even"] = evenCount;
resultFifteen["odd"] = Oddcount;
console.log(resultFifteen);

// 17. Find common keys between two objects

let inputSeventeen = [{ a: 1, b: 2, c: 3 }, { b: 4, c: 5, d: 6 }];

let obj1 = inputSeventeen[0];
let obj2 = inputSeventeen[1];
let arrSeventeen = [];
for (let key in obj1) {
    if (key in obj2) {
        arrSeventeen.push(key);
    }
}
console.log(arrSeventeen)

// 18 .Convert array of objects to lookup by id

let inputEighteen = [{ id: 1, name: "A" }, { id: 2, name: "B" }];
let resultEighteen = {};

for (let key of inputEighteen) {
    resultEighteen[key.id] = key
}

console.log(resultEighteen);

// 19. Check if all values in object are numbers

let inputNineTeen = { a: 1, c: 3 }
let resultNineteen = true;

for (let key in inputNineTeen) {
    if (typeof inputNineTeen[key] !== "number") {
        resultNineteen = false
        break;
    }
}
console.log(resultNineteen)