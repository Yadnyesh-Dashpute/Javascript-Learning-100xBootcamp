// 🔹 20 intermediate (Objects + Arrays)

// 1. Sum all transactions per user

let inputTwenty = [
    { user: "A", amount: 100 },
    { user: "B", amount: 200 },
    { user: "A", amount: 50 }
]
let resultTweenty = {};
for (let key of inputTwenty) {
    let sum = 0;
    const user = key.user;
    const amount = key.amount;

    if (!resultTweenty[user]) {
        resultTweenty[user] = 0;
    }
    resultTweenty[user] += amount;
}
console.log(resultTweenty);

// 2. Transform API response to object (id → name)
let input2 =
    [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" }
    ]

let result2 = {};

for (let value of input2) {
    result2[value.id] = value.name
}

console.log(result2);

// 3.Remove falsy values from object

let input3 = { a: 0, b: null, c: "hello", d: undefined, e: 5 };

let result3 = Object.fromEntries(
    Object.entries(input3).filter(([_, value]) => value != null)
);

console.log(result3)

// 4. Check for permissions from roles

let roles = { admin: ["read", "write"], user: ["read"], staff: ["write"] }
checkRole = "user",
    action = "write"
let result4 = false;
if (roles[checkRole] == action)
    result4 = true

console.log(result4);

// 5. Transform array of orders into revenue per category

let input5 = [
    { id: 1, category: "electronics", price: 100 },
    { id: 2, category: "clothes", price: 50 },
    { id: 3, category: "electronics", price: 200 }
]

let result5 = {};

for (let key of input5) {
    let category = key.category;
    let price = key.price;

    if (!input5[category]) {
        result5[category] = 0;
    }
    result5[category] += price;
}

console.log(result5);

// 6. Remove duplicate objects by id

let input6 = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 1, name: "A" }
]

let seen = new Set();
let result6 = [];

for (let user of input6) {
    if (!seen.has(user.id)) {
        seen.add(user.id);
        result6.push(user);
    }
}
console.log(result6)


// 7. Chunk object entries into groups of size

let input7 = { a: 1, b: 2, c: 3, d: 4 }, size = 2

const entries = Object.entries(input7);

const res = [];

for (let i = 0; i < entries.length; i += size) {
    res.push(Object.fromEntries(entries.slice(i, i + size)))
}

console.log(res);


// 8. Find longest string among object values

const input8 = { a: "apple", b: "banana", c: "kiwi" }
let entries8 = Object.entries(input8);
let maxLength = -Infinity;
let maxWord = null;
for (let words of entries8) {
    if (maxLength < words[1].length) {
        maxLength = words[1].length;
        maxWord = words[1];
    }
}
console.log(maxWord)


// 9. Convert the object where languages are the top-level keys, and inside each are translation strings by key into an object where translation keys are the top-level keys, and inside each you store values per language [HARD**]

const input9 = {
    en: { hello: "Hello", bye: "Goodbye" },
    fr: { hello: "Bonjour", bye: "Au revoir" },
    es: { hello: "Hola" }
}

let result9 = {};
let entries9 = Object.entries(input9);

for (let [lang, words] of entries9) {

    for (let innerKey in words) {
        if (!result9[innerKey]) {
            result9[innerKey] = [];
        }

        result9[innerKey][lang] = words[innerKey];
    }
}
console.log(result9);

// 10 . Build index of ids grouped by category

const input10 =
    [
        { id: 1, category: "fruit" },
        { id: 2, category: "veggie" },
        { id: 3, category: "fruit" }
    ]

let result10 = {};
for (let i of input10) {
    let id = i.id;
    let category = i.category;


    if (!result10[category]) {
        result10[category] = [];
    }
    result10[category].push(id);
}

console.log(result10)



// 11. Remove deeply nested key from object

let input11 =
    { a: { b: { c: 1, d: 2 } } }

let result11 = {};

for (let key in input11) {
    if (!result11[key]) result11[key] = {};
    for (let innerKey in input11[key]) {
        if (!result11[key][innerKey]) result11[key][innerKey] = {};
        for (let deepKey in input11[key][innerKey]) {
            if (deepKey === "c") continue;
            result11[key][innerKey][deepKey] = input11[key][innerKey][deepKey];
        }
    }
}
console.log(result11);

// 12. Check if two objects are deeply equal

let input12 =
    [{ a: { x: 1, y: 2 } }, { a: { x: 1, y: 2 } }]

const array12 = Object.entries(input12);
let object1 = Object.entries(input12[0])
let object2 = Object.entries(input12[1])

console.log(object1)
console.log(object2)

let result12 = {};


for (let key in object1) {
    for (let key2 in object2)
        console.log(JSON.stringify(object1[key][1]) === JSON.stringify(object2[key2][1]))
}


// 13. Deep flatten nested arrays inside object

let input13 = { a: [1, [2, [3]]], b: [4, [5]] }
let result13 = {};
for (let key in input13) {
    if (!result13[key]) {
        result13[key] = [];
    }
    result13[key].push(...input13[key].flat(Infinity));
}
console.log(result13);

// 14. Find most repeated word across categories

let input14 = { fruits: ["apple", "apple", "banana"], drinks: ["apple", "tea"] }
let count = {};
for (let key in input14) {
    for (let word of input14[key]) {
        if (!count[word]) {
            count[word] = 0;
        }
        count[word]++;
    }
}
let maxWord1 = null;
let maxCount = 0;

for (let word in count) {
    if (count[word] > maxCount) {
        maxCount = count[word];
        maxWord1 = word;
    }
}

console.log(maxWord1);

// 15. Find intersection of all arrays in object

let input15 = { a: [1, 2, 3], b: [2, 3, 4], c: [3, 4, 5] }
let count15 = {};

for (let key in input15) {
    for (let value of input15[key]) {

        if (!count15[value]) {
            count15[value] = 0;
        }
        count15[value]++;
    }

}

let maxWord15 = 0;
let maxCount15 = 0;
for (let word in count15) {
    if (count15[word] > maxCount15) {
        maxCount15 = count15[word];
        maxWord15 = word
    }
}
console.log(maxWord15);

// 16. Deep merge two nested objects

const obj161 = { a: { x: 1, y: 2 } }
const obj162 = { a: { y: 3, z: 4 } }

let result16 = {};

for (let key in obj161) {
    result16[key] = {};
    for (let innerKey in obj161[key]) {
        result16[key][innerKey] = obj161[key][innerKey]
    }

    for (let innerKey in obj162[key]) {
        if (result16[key][innerKey]) {
            result16[key][innerKey] += obj162[key][innerKey];
        } else {
            result16[key][innerKey] = obj162[key][innerKey];
        }
    }
}

console.log(result16)

// 17. Nested object destructuring

let input17 = { user: { profile: { name: "Alice", age: 25 } } }

console.log(...Object.values(input17.user.profile));

// 18. Find top N keys by value

let input18 = { a: 10, b: 50, c: 30, d: 40 }
let N = 2

let result18 = Object.entries(input18).sort((a, b) => b[1] - a[1]).slice(0, N).map(entry => entry[0]);
console.log(result18);

// 19. Sort array of objects by name then age

let input19 = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Alice", age: 22 }
]

input19.sort((a, b) => {
    if (a.name == b.name) {
        return a.age - b.age;
    }
    return a.name.localeCompare(b.name);
})

console.log(input19);

// 20. Reconcile two lists (missing + extra items)

let expected = ["a", "b", "c"]
let actual = ["b", "c", "d"]

const expectedSet = new Set(expected);
const actualSet = new Set(actual);

const result20 = {
    missing: expected.filter((x) => !actualSet.has(x)),
    extra: actual.filter((x) => !expectedSet.has(x)),
}

console.log(result20);

// 21. Merge two objects (no sum, override second)

let obj211 = { a: 10, b: 20 }
let obj212 = { a: 5, c: 15 }

let result21 = { ...obj211, ...obj212 }
console.log(result21)