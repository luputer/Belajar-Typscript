// interface Person {
//     name: string;
//     sayHello(name: string): string;
// }

// const person: Person = {
//     name: "muhammad said",
//     sayHello(name: string): string {
//         return `hello ${name}, my name is ${this.name}`;
//     }
// }


interface manusia {
    nama: string;
    katakanHello(name: string): string;
}


const orang: manusia = {
    nama: "feby",
    katakanHello(name: string): string {
        return `hello ${name}, my name is ${this.nama}`
    }
}


console.info(orang.katakanHello('saidi'))



// console.log(person.sayHello("John"));  // Output: hello John, my name is muhammad saidi


console.info("TESS COBA Interface")


interface Hewan {
    Bersuara(name: string, jenis: string, suara: string) : string;
}


const kucing : Hewan = {
    Bersuara(name: string, jenis: string, suara: string) : string {
        return `kucing ${name} bersuara ${jenis}, suaranya ${suara}`
    }
}

const anjing : Hewan = {
    Bersuara(name: string, jenis: string, suara: string): string {
        return `anjing ${name} berjenis ${jenis} dan suara ${suara}`
    }
}


console.info(anjing.Bersuara('dogy', 'anjing', 'gukguk'))
console.info(kucing.Bersuara('caty', 'kucing', 'meow'))

// console.info(kucing.Bersuara('catty', 'meong'));