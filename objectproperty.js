const students =[
    {id : 11, name : "Amarandro"},
    {id : 7, name : "Bilachol"},
    {id : 2, name : "Chandan"},
    {id : 24, name : "Debanal"},
    {id : 25, name : "Echamoti"},
]
// const {name} =students[3]

// console.log( name );

// let sName = [];
// let sId = []
// for (let index = 0; index < students.length; index++) {
//     const {name} = students[index];
//     const {id} = students[index];

//     sName.push(name);
//     sId.push(id);
// }
// console.log(`{sName}, {sId}`);

const names = students.map(s => s.name);
const sId = students.map(s => s.id);
const bigger = students.filter(s => s.id>0)
const fbigger = students.find(s => s.id>0)
console.log(names);
console.log(sId);
console.log(bigger);
console.log(fbigger);