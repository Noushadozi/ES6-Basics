// declaration function
// function show(){
    // console.log('hello cruel world');
// };


// expression function
// const show = function(){
    // console.log('hello cruel world');
// };

// arrow function
const add = (x, y) => {
    return x+y;
}
console.log(add(3,4));

// 
const show = x => x;

console.log(show(3));

// 
const noParameter = () => console.log('hello cruel world')
noParameter()