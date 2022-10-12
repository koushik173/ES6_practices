const person = {
    name: "Jack William",
    age: 12,
    Wife : "Ema watson",
    friends: ["Tom hangs", "Roy"],
    mobile : "017471514633"

}
//const gfName = person.Wife;

//const phone  = person.mobile;

const {mobile, Wife}  = person ;
// console.log(Wife, mobile);


const friends = ['Sakib Khan', 'Salman Khan', 'Aamir Khan']
const [chutoVi, picchiVi, ...restVi] = friends;
// console.log(chutoVi, picchiVi, restVi);

const complex = {
    name: "Sokina",
    info: {
        address : "Jadughor",
        leader: {
            president : "Roy",
            secretary : "Koushik"
        }
    }
}

// const {secretary} = complex.info.leader;

// console.log(secretary);

const {info} = complex;

console.log(info);