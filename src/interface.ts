interface category {
    id: number | string;
    name: string;
    description: string;
}

interface seller {
    id: number | string;
    name: string;
    address: string;
    category?: category;
    nib: string;
     readonly npwp: string;
}


const kategori : category = {
    id: 1,
    name: "Electronics",
    description: "Electronics products"
}

const jenisbarang : category = {
    id: 2,
    name: "Clothing",
    description: "Clothing products"
}


const penjual : seller = {
    id: 1,
    name: "John Doe",
    address: "123 Main St",
    nib: "1234567890",
    npwp: "1234567890123",
    category: kategori, 
} 


penjual.name = 'muhammad saidi'
penjual.nib = '4243434234234'


const penjual2 : seller = {
    id: 2,
    name: "Jane Smith",
    address: "456 Elm St",
    nib: "9876543210",
    npwp: "9876543210123",
    category: jenisbarang,
}



console.info(penjual)
console.info(penjual2)