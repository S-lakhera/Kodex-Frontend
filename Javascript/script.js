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
