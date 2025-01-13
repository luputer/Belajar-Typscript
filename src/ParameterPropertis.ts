class Person {
    constructor( protected nama: string = " "){
    }
}


class orang extends Person {
    public orang(): void {
        console.info(this.nama)
    }
}
const person = new Person();
console.info(person) 

const people = new orang("saidi");
// people.orang
console.info(people)
