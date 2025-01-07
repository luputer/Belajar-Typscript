interface StringArray {
    [index: number]: string
}


interface StringDictionay {
    [key: string]: string
}


const names: StringArray = ["muhammad saidi", "Surya Arinaldi", "Seniman Daffa", "Hendra"];

const dictionary: StringDictionay = {
    name: "Muhammad saidi",
    address: "Banjarmasin"
}


// console.info(names[0])
// console.info(names[1])
// console.info(names[2])
// console.info(names[3])


console.info(dictionary["name"]);
console.info(dictionary.address)