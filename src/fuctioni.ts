interface addFuction {
    (value1: number, value2: number): number
}

const add: addFuction = (angak1: number, angka2: number): number => {
    return angak1 + angka2
}

const remove: addFuction = (angak1: number, angka2: number): number => {
    return angak1 - angka2
}

const bagi: addFuction = (angak1: number, angka2: number): number => {
    return  angak1 / angka2
}


const kali: addFuction = (angak1: number, angka2: number): number => {
    return angak1 * angka2
}




console.info(`hasil tambah : ${add(1, 2)}`);
console.info(`hasil kurang: ${remove(5, 2)}`);
console.info(`hasil bagi: ${bagi(10, 2)}`);
console.info(`hasil kurang: ${kali(1, 2)}`);
