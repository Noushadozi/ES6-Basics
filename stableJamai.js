const jamais = [
    {Name:'dasdasd', job:'sorkari', salary:'45645'},
    {Name:'asdadsfsdfgg', job:'besorkari', salary:'45645'},
    {Name:'dfghfdgdf', job:'sorkari', salary:'36777'},
    {Name:'ghdfhfgjhh', job:'sorkari', salary:'43555'},
    {Name:'gfdvvfg', job:'besorkari', salary:'64666'},
    {Name:'gregrhbc', job:'besorkari', salary:'36666'},
    {Name:'cxbcbnh', job:'besorkari', salary:'45000'},
    {Name:'tyhtryrt', job:'sorkari', salary:'17000'},
]

const picked = jamais.filter(pola => (pola.job === "sorkari" && pola.salary >= 20000) || (pola.job === "besorkari" && pola.salary >= 40000))

console.log(picked)
