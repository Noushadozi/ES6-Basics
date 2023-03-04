const person1 = {
  name: "noushad",
  age: 34,
  phone: "0192595403247",
  address: "khola mura",
  p: [1, 2, 3, 4],
};


const {p} = person1;

const [number] = p;




console.log(number);








// const person2 = {...person1};


// person2.isMale = true;


// const name = person.name;
// const age = person.age;
// const bari = person.address;
// console.log(name);
// console.log(bari);
// console.log(age);

// const {name, age, address:bari} = person;
// const {p, ...rest} = person;