const person = {
    name: 'abul',
    age: 23,
    contact:{
        phone: '01925954098',
        email: 'noushadxaman@gmail.com'    
    },
    education:{
        schoolName: 'harjim',
        subjects:[
            {name: 'bamgla', mark: 45},
            {name: 'english', mark: 64},
            {name: 'math', mark: 74}
        ]
    }
}
console.log(person.education.subjects[1].mark);




// const age = person.age;
// const age = person['age'];
// const property = 'age';

// const age = person[property];

// console.log(age);