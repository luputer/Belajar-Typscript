
// class abstart class yg belum selesai
abstract class Pembeli{
    readonly id: string | number;
    abstract name: string;

    constructor(id: string | number){
        this.id = id;
    }

    abstract sayHello(name: string): void;
}


class RegularCustumer extends Pembeli {
    name: string;

    constructor(id:number | string,  name: string){
        super(id);
        this.name = name;
    }

    sayHello(name: string): void {
        console.info(`Hello ${name}, my name is ${this.name}`)
    }
}

class exlusiveCostumer extends Pembeli {
    name: string;
    constructor(id: number | string, name: string){
        super(id);
        this.name = name;
    }
    
    sayHello(name: string): void {
        console.info(`Hello ${name}, my name is ${this.name}`)
    }
}



const Pembeli1 = new RegularCustumer(1, 'saidi');
console.info(`Hello ${Pembeli1.name} dengan id ${Pembeli1.id}`)
Pembeli1.sayHello('feby')


const Pembeli2 = new RegularCustumer(2, 'ari');
console.info(`Hello ${Pembeli2.name}, dengan id ${Pembeli2.id}`)
Pembeli2.sayHello('andika')