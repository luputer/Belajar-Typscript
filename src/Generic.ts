function getFirstElement<ElementType>(aray: ElementType[] ){
    return aray[0];
}


const numbers = [1,2,3,4,5]
const firstNum = getFirstElement<number>(numbers);
console.log(firstNum); // Output: 1

const strings = ["apple", "banana", "cherry"]
const firstFruit = getFirstElement<string>(strings);
console.info(firstFruit)

const mixedArray = ["mangga", "apple", true, {name: "John Doe"}]

const firstMixedElement = getFirstElement<any>(mixedArray);

console.log(firstMixedElement); // Output: 1


function Tambah<Ttype, BType>(A:Ttype, B:BType): void{
    console.info(`nilai ${A} dan ${B}`);
}

Tambah('satu', 2)

