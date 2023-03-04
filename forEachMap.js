const arr = [1, 2, 3, 4, 5];

// for(let n of arr){
    // console.log(n);
// };

// arr.forEach(number => console.log(number*3))


// arr.map(number=> console.log(number*2));

// const newArray = arr.forEach(number => number)
// console.log(newArray);
const newArray = arr.map(number => number*3)
console.log(newArray);
console.log(arr);