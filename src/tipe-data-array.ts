const names:string[] = ['sadi', 'arri', 'dafaa'];
const values:number[] = [1,2,3,4,5,6,7,8,9,10];


const hobbies: ReadonlyArray<string> = ["membaca", "menulis"];


//can't to write
// hobbies[0] = "I like play the game"




// this tupple 
const person: readonly [string, string, number] = ["muhammad", "saidi", 19];

console.info(person[0])
console.info(person[1])
console.info(person[2])



// console.info(hobbies)
// console.info({names})
// console.info({values})