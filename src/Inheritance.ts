class Employee {
    name: string;
    gaji: number


    constructor(name: string, gaji:number) {
        this.name = name
        this.gaji = gaji 
        
    }
}


class manager extends Employee {
    jabatan: string;

    constructor(name: string, gaji: number, jabatan: string){
        super(name, gaji, )
        this.jabatan = jabatan;
    }

}

const pegawai  = new Employee(
    "John Doe",
    500000
)


const sales = new Employee(
    "Luputer",
    400000,
)

const managerSales = new manager(
    "Jane Doe",
    700000,
    "Manager Sales"
)

const kepalagudang  =  new manager(
    "Jane Doe",
    700000,
    "Kepala Gudang"
)

console.info({pegawai})
console.info({kepalagudang})
console.info({sales})
console.info({managerSales})