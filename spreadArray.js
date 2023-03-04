
// const number2 = [3, 1, 23, 31];

// console.log(Math.min(...number));

// const newArr = [312, 423, 53, ...number]; 
// console.log(newArr);
// 


// let arr1 = [3, 1, 23, 31, 65, 767];

// let arr2 = [...arr1];

// arr1.push(7);
// arr2.push(9);
// console.log(arr1);
// console.log(arr2);
const number = [3, 1, 23, 31, 2, 3, 1, 3];

// const first = number[0];
// const second = number[1];

const [first, second, ...rest] = number;


console.log(first, second, rest); 