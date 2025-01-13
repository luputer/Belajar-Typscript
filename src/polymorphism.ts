

class Animal {
    constructor(protected name: string){
    }

    public makeSound():void {
        console.log("some ganerinc sound")
    }
}

class Dog extends Animal{
    constructor(name: string){
        super(name)
    }
    public makeSound(): void {
        console.log("bark")
    }
}

class Cat extends Animal {
    constructor(name: string){
        super(name)
    }
    public makeSound(): void {
        console.log("meow")
    }
}

function crateaSound(animal: Animal): void{
    animal.makeSound()
}

const myDog = new Dog("Rex");
const myCat = new Cat("Whsikers");

// console.info(`Dog: ${myDog}, suaranya : ${crateaSound(myDog)} `)
// console.info(`Cat: ${myCat}, suaranya : ${crateaSound(myCat)} `)



console.info(myCat)
console.info(myDog)

crateaSound(myDog)
crateaSound(myCat)

 export default class Employee {
    constructor(public name: string){}
 }

 class Manager extends Employee{}

 class VicePresident extends Employee {
 }


 let employe : Employee = new Employee("saidi");
 console.info(employe)

 employe = new Manager('aldi')
 console.info(employe)


 employe = new VicePresident('sami')
 console.info(employe)


 function sayHello(pegawai: Employee): void {
    console.info(`Hello ${employe.name}`)
 }

function katakanHello(pegawai: Manager): void {
    console.info(`Hello ${pegawai.name}`)
}

sayHello(new Employee('saidi'))
sayHello(new Manager('aldi'))
sayHello(new VicePresident('surya arinaldi'))


katakanHello(new Manager('feby'))
katakanHello(new Employee('bambang'))
katakanHello(new VicePresident('hendra'))


