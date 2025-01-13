function create<T>(value: T): T {
    return value
}

// const result = create("hello word");
// console.info(result);


// const result2 = create(123);
// console.info(result2);

// const result3 = create(true);
// console.info(result3);

// const result4 = create(undefined);
// console.info(result4);




class Entry<K, V>{
    constructor(public key: K, public value: V){
    }
}


class Triple<K, V, T>{
    constructor(public first: K, public secound: V, public third: T){
    }
}

const entry = new Entry('1', 30)
const msh = new Entry(1, "muhammad saidi")

console.info(msh)
console.info(entry)


const  triple = new Triple('saidi', 209, true)
console.info(triple)