enum Costumertype{
    REGULAR = 'REGULAR',
    GOLD = 1,
    PLATIMUN = 3,
}

type costumer = {
    id: string | number,
    name: string,
    type: Costumertype,
}


const pelangan: costumer = {
    id:'1',
    name: 'Muhammad Saidi',
    type: Costumertype.REGULAR
}


const pebeli: costumer = {  
    id: '2',
    name: 'Siti Fatima',
    type: Costumertype.GOLD
}



console.info({pelangan}, {pebeli})

enum TypePesanan {
    BIASA = 'Biasa Tetapi memuaskan',
    SPESIAL = 'SPEAIAL BUAT Seseorang yang Spesial',
    SUPER = 'Super Duper Enak'
}

//type alias
type makanan = {
    id: string | number,
    nama: string,
    harga: number,
    type: TypePesanan
    deskripsi?: string
}

//pangil variabel 1
const martabak : makanan = {
    id: '1',
    nama: 'Martabak Goreng',
    harga: 5000,
    type: TypePesanan.SPESIAL,
    deskripsi: 'Martabak yang dibuat dengan kuliner Goreng'
}



const terangBulan : makanan = {
    id: 2,
    nama: 'Terang bulan',
    harga: 3000,
    type: TypePesanan.SUPER,
}

const ayamBakar : makanan = {
    id: '3',
    nama: 'ayam Goreng upin',
    harga: 7000,
    type: TypePesanan.BIASA,
    deskripsi: 'Ayam yang dibuat dengan kuliner Goreng upin'
}


// console.info({martabak})
// console.info({terangBulan})
// console.info({ayamBakar})