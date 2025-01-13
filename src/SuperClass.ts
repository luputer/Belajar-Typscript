class Person {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}


class Pegawai extends Person {
    nip: string | number ;
    pekerjaan: string; 
    desckirpsi?: string

    constructor(nip: string, name: string, age: number | number, pekerjaan: string, desckirpsi?: string){
        super(name, age)
        this.nip = nip
        this.pekerjaan = pekerjaan
        this.desckirpsi = desckirpsi   
    }
}


class Manager extends Pegawai {
    devisi: string;
    tunjangan: number | string ;;
    constructor(nip: string, name: string, age: number, pekerjaan: string, devisi:string, tunjangan: number| string, desckirpsi?: string,){
        super(nip, name, age, pekerjaan, desckirpsi)
        this.devisi = devisi
        this.tunjangan = tunjangan
    }
}





let pegawai1 = new Pegawai('123456789', 'John Doe', 30, 'Software Engineer', 'Senior Software Engineer')
console.log(pegawai1)

let manager1 = new Manager('987654321', 'Jane Doe', 40, 'Manager', 'Finance', 500000, 'Project Manager')
console.info(manager1)