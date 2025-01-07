
type id = string | number;

type Category = {
    id : id,
    name : string,
    description?: string,
}


type product = {
    id: id
    name: string,
    description: string,
    price: number,
    category?: Category,
}

const category : Category = {
    id: 1,
    name: "Electronics",

}   

const product : product = {
    id: 2,
    name: "Laptop",
    description: "15 inch, AMD Ryzen 5",
    price: 1200,
    // category: category
}


// console.info({category})
console.info({product})