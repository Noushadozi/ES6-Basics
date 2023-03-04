const students = [
    {name:"sdfs", email:"dfsdfsdfsdfsfd", avg: 49, fiftyPercent: true},
    {name:"esdf", email:"sdfsdfsdfsdfsdf", avg: 52, fiftyPercent: false},
    {name:"dsferf", email:"sdfsdfsdfsdfsdf", avg: 23, fiftyPercent: false},
    {name:"sfdsdf", email:"sdfsdfsdfsdfsdfsdf", avg: 45, fiftyPercent: true},
    {name:"dsfsdf", email:"sdfsdfsdfsdfsdfsdfsdf", avg: 59, fiftyPercent: true},
    {name:"af", email:"sdfsdfsdfsfsdfcgvdfhgedf", avg: 60, fiftyPercent: true},
    {name:"g", email:"sfsdfsdfsdf", avg: 30, fiftyPercent:false},
    {name:"shakib", email:"sdfsdfgsdgsdgfrghtdh", avg: 20, fiftyPercent: true}
]

const scic = students.filter(s => s.avg>= 50 && s.fiftyPercent === true)
    console.log(scic)
