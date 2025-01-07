type catergory = {
    id: number;
    name: string;
    products?: string
}

const categorris: catergory = {
    id: 1,
    name: 'clothes',
    products: 'baju'
}

// console.info({categorris})

const baju: {id: number | string, name: string, products: string, category?: catergory} = {
    id: 1,
    name: 'Shirt',
    products: 'Casual, formal',
    category: categorris
}

// console.info({baju})

const orang: {id: number| string, name: string, hobies?: string[]} = {
    id: 1,
    name: 'John',
    // hobies: ['reading', 'painting', 'cooking']
}

// orang.id = '2'
// orang.name = 'muhammad saidi'
// orang.hobies = ['makan', 'tidur', 'ngoding'];


console.info({orang})