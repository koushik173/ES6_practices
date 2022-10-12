class Parent{
    constructor(){
        this.fatherName = "Schwerznegger";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }

    getFullNAme(){
        return this.name + " " + this.fatherName;
    }
}



const baby = new Child("Arnold")
const baby2 = new Child("Tom")
console.log(baby.getFullNAme());

console.log(baby2.getFullNAme());