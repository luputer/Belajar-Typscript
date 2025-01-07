function sayHello(name?: string){
    if(name){
        console.info(`hello ${name}`)
    } else {
        console.info('Hello')
    }
}


// sayHello('Muhammad saidi')
// const name: string | undefined = undefined;
// sayHello(name)

function Bilanghello(nama?: string | null){
    if(nama){
        console.info(`hello ${nama}`);
    } else {
        console.info('Hello')
    }
}

Bilanghello('feby')
const nama: string | undefined = undefined;
Bilanghello(nama)
Bilanghello(null)

