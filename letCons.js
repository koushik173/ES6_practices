const hubby = "ELias Kanchon";
// hubby = "Omor sunny ";
console.log(hubby);

const numbers = [12,14]
numbers[0] = 56;
console.log(numbers)
const hero = {name: "roy", phone: 6656};
console.log(hero)

let patientName = "Korim ChaCha"
patientName = "Fatema Khala"

console.log(patientName)

function add(num1, num2=0)
{
    if(num2== undefined){
        num2=0;
    }
    num2 = num2 || 0;
    return num1 + num2;
}

//console.log(add(12)) //print ->>>>> nan
console.log(add(12,15))

template

const fName = "Justin"
const lname = "TimberLake"

const  funName = fName +" "+ lname;
console.log(funName);
let funName2 = `${fName} ${lname} is a bad boy`;
funName2 = `${fName} ${20+34+343} is a bad boy`;
console.log(funName2);

const multiline = "I just want see u \n And say sorry. \n I know sorry can not fix the broken glass"

const multiline2 = `
what can i do now
its very hard for me 
i know  i did wrong
i regret  too much
my whole i know i always miss those when you was with me`

console.log(multiline);
console.log(multiline2);



