interface Karyawan {
    id:string | number;
    name: string;
    devision: string;
    description?: string
}


interface Pegawai extends Karyawan { 
    nomorPegawai: number;
}


interface Bos extends Pegawai{
    NamaPerusahaan: string | number;
}



const Bos1 : Bos = {
    id: 89,
    name: "Rudi",
    devision: "Finance",
    nomorPegawai: 10,
    NamaPerusahaan: "PT. ABC Indonesia"
}

// console.info(Bos1)



const pegawaiNegeri : Karyawan  = {
    id:1,
    name: "Saidi",
    devision: "IT",
    description: "manage web development"
}

// console.info(pegawaiNegeri)


const KaryawanToko : Pegawai = {
    id: "2",
    name: "bambang",
    devision: "Marketing",
    nomorPegawai: 19
}


// console.info(KaryawanToko)




interface Manusia {
    id: string | number;
    name: string;
    umur: number | string;
    alamat: string;
    agama: string;
    gold: string
}


interface Elf extends Manusia {
    kualitasElf: string;
    kemampuanElf: string;
}




const alea : Elf = {
    id: 3,
    name: "Andi",
    umur: "25 tahun",
    alamat: "jalan raya",
    agama: "Islam",
    gold: "gold",
    kualitasElf: "Sangat Baik",
    kemampuanElf: "Kreatif"
}


console.info(alea)


const saidi : Manusia = {
    id:1,
    name: "saidi",
    umur: 30,
    alamat: "jalan raya",
    agama: "Islam",
    gold: "gold"
}


console.info(saidi)





