import Employee from "./polymorphism";

class VicePresident extends Employee{

}

class Manager extends Employee {

}


function sayHello(employe: Employee): void {
    if(employe instanceof VicePresident){
        const vp = employe as VicePresident;
        console.info(`Hello VP ${vp.name}`)
    } else if(employe instanceof Manager){
        const manager  = employe as Manager;
        console.info(`Hello Manager ${manager.name}`);
    } else {
        console.info(`Hello Empoloyer ${employe.name}`)
    }
}


sayHello(new Employee('saidi'));
sayHello(new VicePresident('aldi'));
sayHello(new Manager('feby'));


function sayHelloWWrong(employe: Employee): void {
    if(employe instanceof Manager){
        const manager = employe as Manager;
        console.info(`Hello Manager ${manager.name}`)
    } else if(employe instanceof VicePresident) {
        const vp = employe as VicePresident;
        console.info(`Hello VP ${vp.name}`)
    } else {
        console.info(`hello employee ${employe.name}`)
    }
}

sayHelloWWrong(new Employee('budi'))
sayHelloWWrong(new Manager('Eko'))
sayHelloWWrong(new VicePresident('Joko'))