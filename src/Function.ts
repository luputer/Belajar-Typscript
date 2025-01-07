function KatakanHallo(name: string, umur: string | number ): string {
    return `Hello nama saya ${name} umur saya ${umur}`
}



function sayHello(name:string, umur:string |number ) : string{
    return `Hallo nama saya ${name} dan umur saya ${umur}`
}


function helloWord(name:string, umur: string|Number){
    console.log(`Hello Iam ${name} and now Iam ${umur} years old🎂`)
}


//sum fuction
function sum(...values: number[]): number{
    let total = 0;
    for(const value of values) {
        total += value;
    }
    return total;
}



function kurang(...values: number[]): number {
    let hasil = 0;
    for(const value of values){
        hasil -= value;
    }
    return hasil;
}




console.info(kurang(100,3,3,3,3,3))
console.info(kurang(50,3,3,3,3,3))
console.info(kurang(200,3,3,3,3,3))



console.log(sum(1,2,4,4,4,4))



helloWord('Muhammad Saidi', 20)








function Callme(value:number): number;
function Callme(value:string): string;
function Callme(value:any){
    if(typeof value === 'string'){
        return value;
    } else if(typeof value ==='number'){
        return value;
    }
} 





console.info(Callme(90))
console.info(Callme('saidi'))




function Ngomong(name:string, filter:(name:string) => string){
    return`Hello ${filter(name)}`
}



function NAMA_BESAR(name:string):string {
    return name.toUpperCase();
}


function NAMA_KECIL(name:string): string {
    return name.toLowerCase();
}


//anonymous function

function saysHello( name:string, filter:(name:string) => string) {
    console.info(`Hello ${filter(name)}`)
}

saysHello('Luputer', NAMA_KECIL)




console.info(KatakanHallo('Luputer', NAMA_BESAR('hello iam A sofware engineers')))
console.info(KatakanHallo('Muhammad saidi', NAMA_KECIL('Greet job for you')))


function printHello(name: string, filter:(name: string) => string){
    return `Hello ${filter(name)}`
}


console.info(printHello('LUPUTER', NAMA_KECIL))

// console.info(NAMA_BESAR('Hello iam Luputer'));
// console.info(NAMA_KECIL("IAM A SOFWARE ENGINER "))


