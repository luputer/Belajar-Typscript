console.log("tess ini saya coba intersection");

interface tambahName {
    name: string
}

interface tambahAge {
    age: number | string
}

type tambahDetail = tambahAge & tambahName;

type Person = {
    id: string | number;
    details: tambahDetail
    address?: string
}


const mahasiswa: Person = {
    id: 1,
    details: {
        name: "John Doe",
        age: 30
    },
    address: "banjarmasin"
}


const dosen: Person = {
    id: "D001",
    details: {
        name: "Dr. John Doe",
        age: "45"
    },

}

const Orang: any = {
    name: "Muhamamd Saingdi",
    age: 20,
}




console.info(dosen)



console.info(mahasiswa)