

const number  = [2,4,5,6,7,5,8,3];

number.map(function square(element, index, array){
    console.log(element, index, array);
})

const square = element => element*element;


const result1 =  number.map(function square(element){
    return element*element;
})
console.log(result);

const square1 = x => x*x;

const result = number.map(x => x*x)
console.log(result);

const bigger1 = number.filter(x => x<5);
console.log(bigger);

const bigger = number.find(x => x>5);
console.log(bigger);