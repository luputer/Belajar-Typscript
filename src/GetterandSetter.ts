class Category {
    _name? : string;
    get name() : string {
        if(this._name){
            return this._name;
        }  else {
            return "empty";
        }
    } 
    
    
    set name(value: string) {
        if(value !== ""){
            this._name = value;
        }    
    }
}

const category = new Category();
console.info(category.name)

category.name = "Food";
console.info(category.name)

category.name = "";
console.info(category.name)


class Person {
    _name : string;
    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        if(newName.length > 0) {
            this._name = newName
        } else {
            console.error("Nama tidak boleh Kosong")
        }
    }

}

const person = new Person('Alice');
console.info(person.name)   
person.name = ""