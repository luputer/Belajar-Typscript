class pembeli {
    readonly id: string | number;
    name: string;
    age?: number|string = "belum di isi" 
    describtion?: string = "belum di isi"
    
    constructor(id: number, name: string,){
        this.id = id;
        this.name = name;
    }

    sayHello(name: string):void {
        console.info(`hello ${name}, my nama is ${this.name}`);
    }
    
}

class Order extends pembeli {
    barang: string;
    jumlah: number;

    constructor(id: number, name: string, barang: string, jumlah: number) {
        super(id, name);
        this.barang = barang;
        this.jumlah = jumlah;
    }
}


const pembeli1  = new pembeli(1, "ayam bakar", );
const pembeli2  = new pembeli(2, "surya arindaldi");



const pesan = new Order(1, "Muhammad said", "Mouse RGB", 2)
pesan.age = 18,
pesan.describtion = "Mouse RGB with color and description"
console.info({pesan})




pembeli1.age = 20;
pembeli1.describtion = "pembeli yang rajin"
pembeli1.sayHello('saidi')
pembeli2.sayHello('bambang');

console.info({pembeli1})
console.info({pembeli2})




// const custumer: pembeli = new pembeli();
// const order: Order = new Order();