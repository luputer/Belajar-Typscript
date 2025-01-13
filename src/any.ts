

//tipe data any
const person:any = {
    name: 'saidi',
    umur: 18,
    alamat: {
        jalan: 'jalan kemiri',
        kota: 'bandung',
        provinsi: 'jawa barat'
    }
}


const orang:any = {
    nama: 'surya arianldi',
    umur: 32,
    alamat: {
        jalan: 'jalan gajayana',
        kota: 'jakarta',
        provinsi: 'jawa barat'
    }
}

orang.umur = "32 tahun"
console.info({orang})


person.name = 19
console.log(person)