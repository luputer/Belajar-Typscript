class Pegawai {
    name: string;

    constructor(name: string){
        this.name = name;
    }

    tampilkanInfo(name: string): void {
        console.info(`Hello ${name}, my name is ${this.name}`); 
    }
}

class Manager extends Pegawai{
    tampilkanInfo(name: string): void {
        console.info(`Hello ${name}, my nams is ${this.name} I am your manager`); 
    }
}


class User extends Pegawai{
    nim: number |string;
    jurusan: string;

    constructor(nim: number |string,  name:string, jurusan: string,){
        super(name)
        super.tampilkanInfo(name)
        this.nim = nim;
        this.jurusan = jurusan;
    }
}



const mahasiswa = new User("C030323109", "Muhammad saidi", "teknik Informatika");
console.info(mahasiswa)



const pegawai = new Pegawai('John Doe');
pegawai.tampilkanInfo('saidi')



const manager = new Manager('Arifin');
manager.tampilkanInfo('luputer')




// console.info(pegawai)