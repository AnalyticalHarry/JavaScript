/* 
1. declaring set 
2. printing Unique Values or Element 
3. Count of unique elements in the set
4. converting set to array
5. Eliminating Duplicates from an Array
6. Checking for Existence
7. Efficient Data Collection and Aggregation
8. Using set for doubling values without duplicate 
9. Set Operation
10. using for...of loop
11. for Each Method
12. converting to array and use for loop
13. adding multiple items
14. clearing a Set
15. delete specific items
16. checking set if not empty set
17. complex objects
18. convert to Set to remove duplicates, then convert back to Array
19. Check if fruit is in set
20. Union, intersection and difference
21. Set of Objects by Unique Key - json method
22. Tracking Object Mutations
*/

// 1. creating a number of set using built-in object
const numberSet = new Set([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5]);
// 2. print number of set on screen
console.log("Number of set:", numberSet);
// 3. number of unique elements
console.log("Count of unique elements:", numberSet.size);

// 4. converting set to array
const numberArray = [...numberSet];
// printing converted set to array
console.log(numberArray);

// 5. Eliminating Duplicates from an Array
// creating list of numbers
const listOfNumbers = [1, 1, 2, 2, 3, 3, 3, 4];
// removing duplicates from an array
const uniqueNumber = [...new Set(listOfNumbers)];
console.log(uniqueNumber);

// 6. Checking for Existence
console.log(numberSet.has(3));
console.log(numberSet.has(10));

// 7. Efficient Data Collection and Aggregation
// create an array of objects and also adding duplicates
const customerData = [
  { id: 1, firstName: "Harry", lastName: "Thapa" },
  { id: 2, firstName: "Alexa", lastName: "McDonald" },
  { id: 3, firstName: "Suvish", lastName: "Sharma" },
  { id: 1, firstName: "Harry", lastName: "Thapa" },
];
// using map to print customer data without duplicate
const uniqueIds = new Set(customerData.map((item) => item.id));
console.log(uniqueIds);

// 8. Using Map to double value without using duplicate
const setNumber = new Set([1, 2, 2, 3, 3, 4, 4, 5, 10]);
const numberList = [...setNumber];
const doubleNumber = numberList.map((number) => number * 2);
console.log(doubleNumber);
// alternative method
const tripleNumber = Array.from(setNumber).map((number) => number * 3);
console.log(tripleNumber);
// alternative method
const quadNumber = [...setNumber].map((number) => number * 5);
console.log(quadNumber);

// 9. Set Operations
const setA = new Set([1, 2, 3, 4, 5]);
const setB = new Set([4, 5, 6, 7, 8]);
// union
const union = new Set([...setA, ...setB]);
console.log("Union", union);
// intersection
const intersection = new Set([...setA].filter((x) => setB.has(x)));
console.log("Intersection:", intersection);
// difference
const difference = new Set([...setA].filter((x) => !setB.has(x)));
console.log("Difference", difference);
// subest
const isSubset = [...setA].every((x) => setB.has(x));
console.log("Is A a subset of B?", isSubset);

// 10. using for...of loop
const setOfNumber = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
for (i of setOfNumber) {
  console.log(i);
}

// 11. for Each Method
numberSet.forEach((number) => {
  console.log(number);
});

// 12. converting to array and use for loop
const setToArray = [...numberSet];
for (let i = 0; i <= setToArray.length; i++) {
  console.log(i);
}

// 13. adding multiple items
const emptySet = new Set();
const items = Array.from({ length: 9 }, (_, j) => j + 1);
for (const i of items) {
  emptySet.add(i);
}
console.log(emptySet);

// 14. clearing a Set
console.log(emptySet);
emptySet.clear();
console.log(emptySet);

// 15. delete specific items
console.log(emptySet);
emptySet.delete(3);
console.log(emptySet);

// 16. checking set if not empty set
console.log(emptySet.size !== 0);

// 17. complex objects
const set = new Set();
const obj1 = { name: "Harry" };
const obj2 = { name: "Dave" };
const obj3 = { name: "Harry" };
set.add(obj1);
set.add(obj2);
set.add(obj3);
console.log(set.size);
console.log(set);

// 18. convert to Set to remove duplicates, then convert back to Array
const duplicateNumbers = [1, 1, 2, 3, 3, 4, 4, 5];
const uniqNumber = Array.from(new Set(duplicateNumbers));
console.log(uniqNumber);

// 19. Check if fruit is in set
const setOfFruit = new Set(["apple", "banana", "cherry", "pear", "orange"]);
function isFruitInSet(fruit) {
  const lowerCaseFruit = fruit.toLowerCase();
  return setOfFruit.has(lowerCaseFruit);
}
console.log(isFruitInSet("Banana"));
console.log(isFruitInSet("Orange"));

// 20. Union, intersection and difference
// three sets with overlapping and unique elements
const setAlpha = new Set([1, 2, 3, 4, 5, 6]);
const setBeta = new Set([3, 4, 5, 6, 7, 8]);
const setGamma = new Set([5, 6, 7, 8, 9, 10, 11, 12]);
// union of setAlpha, setBeta, and setGamma
// union includes all unique elements from all three sets
const setUnion = new Set([...setAlpha, ...setBeta, ...setGamma]);
console.log(setUnion);
// intersection of setAlpha, setBeta, and setGamma
// intersection includes only elements that are present in all three sets
const setIntersection = new Set(
  [...setAlpha].filter((x) => setBeta.has(x) && setGamma.has(x))
);
console.log(setIntersection);

// difference between setAlpha and the union of setBeta and setGamma
// difference includes elements that are in setAlpha but not in setBeta or setGamma
const setDifference = new Set(
  [...setAlpha].filter((x) => !setBeta.has(x) && !setGamma.has(x))
);
console.log("Difference", setDifference);

// 21. Set of Objects by Unique Key - json method
const setCustomer = new Set();
// three objects, two of which are identical in content but different in reference
const object1 = { id: 1, name: "Alexa" };
const object2 = { id: 2, name: "Nive" };
const object3 = { id: 1, name: "Alexa" }; // Same ID and content as object1 but a different reference
// add the stringified versions of the objects to the set
// using JSON.stringify() converts the objects to JSON strings, which can be compared for uniqueness
setCustomer.add(JSON.stringify(object1));
setCustomer.add(JSON.stringify(object2));
setCustomer.add(JSON.stringify(object3)); // This will be considered a duplicate because it has the same JSON string as object1
// convert the Set of JSON strings back to objects
// Array.from() creates an array from the Set, and map() parses each JSON string back into an object
const uniqueObjects = Array.from(setCustomer).map((json) => JSON.parse(json));
console.log(uniqueObjects);

// 22. Tracking Object Mutations
const userName = new Set();
const obj = { id: 1, name: "Alexa" };
userName.add(obj);
obj.userName = "Angelica";
console.log(userName);
