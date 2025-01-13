console.info("Hello world!");


type Date = string;

class Data<T>{
    value: T;
    date: Date;
    constructor(value: T, date: Date){
        this.value = value;
        this.date = date;
    }
    
}


const dataString = new Data<string>("hello world!", 'senin-12-30');

const dataNumber = new Data<number>(10, '12-maret-2005')


console.info(dataString)
console.info(dataNumber)


