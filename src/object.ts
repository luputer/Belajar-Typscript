
export type id =  number | string;
export type description =  number | string;


const person: { id: id,  name: string, age: number, description: description} = {
    id: 1,
    name: 'John',
    age: 30,
    description: 'engineer'

}


person.id = "2" ;
person.name = "John"
person.description = "makanan";

console.info({person})


person.id = 3;
person.name = "saidi"

console.log({person})