// const examValue = 60;

// if(examValue > 80){
//     console.info("Good");
// } else if (examValue >= 60) {
//     console.info("lumayan")
// } else {
//     console.info("Coba lagi")
// }


const value = 70;
const say = value >= 75 ? "Selamat" : "Coba lagi";





//switch case with function
function sayHello(name:string): string {
    switch (name) {
        case "saidi":
            return ("HI saidi");
        case "Hendri":
            return ("Hallo Hendri");
        default:
            return `hello`
    }
}




console.info(say);
console.info(sayHello('Hendri'))

// for loop

const names = ["saidi", "Hendri", "bambang"];


// for (let i = 0; i < names.length; i++) {
//     console.info(names[i])
// }


// for (const name of names) {
//     console.info(name)
// }



for(const index in names) {
    console.info(names[index])
}

// while loppp
// let counter = 0;
// while (counter <=10 ){
//     console.info(counter ++)
// }


// let counter = 0;
// do{
//     console.info(counter ++)
// } while (counter < 10);



let counter = 0;
do {
    counter++;
     if(counter == 10){
        break;
     }
     if(counter % 2 == 0){
        continue;
}
    console.info(counter)
} while (true)


//function overloding
function callme(value: number):number;
function callme(value: string ): string;
function callme(value: undefined ): string;
function callme (value: any){
    if(typeof value === "string"){
        return value;
    } else if (typeof value === "number"){
        return  value;
    }
}


function printHello(name: string): void {
   console.info(`hello ${name}`)
}

console.info(printHello('saidi'))


console.info(callme('kocak'))
console.info(callme(90))
console.info(callme(undefined))

