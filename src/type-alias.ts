export type id = string | number ;

export type category = {
    id: id;
    name: string;
}

export type Product = {
    id: id;
    name: string;
    price: number;
    category: category;
}


const category : category = {
    id: 90,
    name: 'Electronics'
}


const product : Product = {
    id: "90000",
    name: 'Smartphone',
    price: 1000,
    category: category
}

product.name = 'iphone 11'


// console.info({category})
console.info({product})