// 1. Write a function that uses `forEach()` to calculate the total sum of an array.

// var arr = [10,20,30,40,50]
// var sum = 0;
// arr.forEach(function(elem){
//     sum += elem;
// })
// console.log(sum);

// 2. Write a function that uses `map()` to return a new array where each number is squared.

// var arr = [2,3,4,5,6]
// var newArr = arr.map(function(elem){
//     return elem*elem;
// })
// console.log(newArr);

// 3. Write a function that uses `filter()` to return only numbers greater than 50.

// var arr = [20,40,60,70,100]
// var newArr = arr.filter((e) => {return e>50})
// console.log(newArr);

// 4. Write a function that checks whether two values are strictly equal using `===`.
// var a = 10;
// var b = '10';
// a === b ? console.log(true) : console.log(false);

// 5. Write a function that demonstrates array mutability by modifying the original array using `push()`.
// var arr = [10,20,30,40,50,60]
// console.log(arr);
// arr.push(70);
// console.log(arr);

// 6. Write a function that removes the last element immutably (without modifying original array).
// var arr = [10,20,30,40,50,60]
// console.log(arr);
// var newArr = arr.slice(0,arr.length-1);
// console.log(newArr);
// console.log(arr);


// 7. Write a function that sorts numbers in ascending order using a proper compare function.
// var arr = [5,145,65,12,19,20,78,95,10]
// arr.sort((a,b) => (a-b));
// const sortedArr = arr.toSorted((a, b) => a - b);
// console.log(arr);

// 8. Write a function that sorts strings alphabetically.
// var list = ['putin', 'Modi', 'trump', 'netanyahu', 'kim', 'jinping', 'Zelensky']
// list.sort((a,b) => a.localeCompare(b));
// console.log(list);


// 9. Write a function that reverses an array without using `reverse()`.
// function reverseArray(arr){
//     var reverse = []
//     for(var i = arr.length-1 ; i>= 0; i--){
//         reverse.push(arr[i]);
//     }
//     return reverse;
// }
// var arr = [5,12,4,16,10,9]
// console.log(arr);

// var revesedArray = reverseArray(arr);
// console.log(revesedArray);


// 10. Write a function that merges two arrays using `concat()` and returns the result.
// function mergeArrays(arr1, arr2){
//     return arr1.concat(arr2)
// }
// let arr1 = [10,20,30,40,50]
// let arr2 = [60,70,80,90,100]
// let arr = mergeArrays(arr1, arr2);
// console.log(arr);


// 11. Write a function that merges two arrays and removes duplicate values.
// const arr1 = [1, 20, 3, 4];
// const arr2 = [3, 4, 5, 20];
// const mergeAndRemoveDuplicates = (arr1, arr2) => {
//     let merged = [...arr1,...arr2];
//     let unique = []
//     for(let i=0; i<=merged.length-1; i++){
//         if(!unique.includes(merged[i])){
//             unique.push(merged[i]);
//         }
//     }
//     return unique;
// }
// console.log(mergeAndRemoveDuplicates(arr1,arr2));


// 12. Write a function that manually checks whether a value exists in an array (without using `includes()`).

// const arr = [1,2,3,4,5,6]

// const existInArray = (arr,num) => {
//     for(let i=0; i<arr.length; i++){
//         if(num == arr[i]){
//             return true;
//         }
//     }
//     return false;
// }
// console.log(existInArray(arr,20));

// 13. Write a function that uses `includes()` to check if an array contains a specific value.


// 14. Write a function that filters strings starting with "A" using `startsWith()`.
// const list = ['Sumit','Aman','Amit','Rahul','Aparna'];
// function filterStringStartingWith (list, ch) {
//     const newList = list.filter((e) => e.startsWith(ch));
//     console.log(newList);
    
// }
// filterStringStartingWith(list,'A');

// 15. Write a function that uses `find()` to return the first number greater than 100.
// const arr = [100,80,20,53,146,56]
// console.log(arr.find((e) => e>100));


// 16. Create an object and write a function that returns all its keys using a loop.
// const user = {
//     name:"Aman",
//     age: 25,
//     role: "student",
//     isAvailable: true
// }
// function getKeysOfObject(obj){
//     const keys = [];
//     for(let key in obj){
//         keys.push(key);
//     }
//     return keys
// }
// user.name = "Amit"
// console.log(user);

// 17. Write a function that adds a new property to an object immutably.
const user = {
    uname : "Arman",
    age: 21,
    city : 'indore'
}

// const addPropertyImmutably = (obj,key,value) => {
//     const updatedObj = {
//         ...obj,
//         [key]:value
//     }
//     return updatedObj;
// }

// console.log(user);
// console.log(addPropertyImmutably(user,'course','Engineering'));

// 18. Write a function that updates a property in an object.
// const updateProperty = (obj,key,value) => {
//     obj[key] = value
// }
// updateProperty(user,'age',45);
// console.log(user);


// 19. Write a function that checks whether a specific key exists inside an object.
console.log('city' in user);
console.log(user.hasOwnProperty('cit'));


// 20. Write a function that converts an object into an array of key-value pairs.
const pairs = Object.entries(user);
// console.log(pairs);
const convertToPairs = (obj) => {
    let result = []
    for(let key in obj){
        result.push([key,obj[key]])
    }
    return result;
}
console.log(convertToPairs(user));
