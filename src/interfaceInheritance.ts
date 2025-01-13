interface HasName {
    name: string
}


interface CanSayHello {
    sayHello(name: string): void;
}

interface biodata {
    age: number;
    height: number;
    weight: number;
    address?: string;
}



class Person implements HasName, biodata, CanSayHello {
    name: string;
    age: number;
    height: number;
    weight: number;
    address?: string;
    constructor(name: string, age: number, height: number, weight: number, address?: string) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.address = address = "opsional"
    }
    sayHello(name: string): void {
        console.info(`Hello ${name}, my name is ${this.name}`)
    }
}




const orang = new Person('saidi', 20, 170, 52)
orang.sayHello('aldi')
console.info(orang)


class pegawai extends Person {
    nip: string | number;
    constructor( nip: string|number,name: string, age: number, height: number, weight: number, address?: string, ) {
        super(name, age, height, weight, address)
        this.nip = nip
    }
}


const pegawai1 = new pegawai(21313213, 'muhammad said', 20, 170, 52)
console.log(pegawai1)