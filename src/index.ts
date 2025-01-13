export function sayHello(name: string): string {
    return `Hello, ${name}!`;
}



// console.log(sayHello('saidi'));


// const a = 10;
// console.log(a);
let name: string = "saidi";
let balance: number = 100000;
let isvip: boolean = false;


function tambah(a:number, b:number){
    return a + b;
}


function kurang(a:number, b:number): void {
    console.log(a - b);
}

const hasil = tambah(1, 2);
console.log(hasil);


kurang(10,5)



console.log({ name })
console.log({ balance })
console.log({ isvip })