let sample: number | string | boolean = "saidi";

sample = true;
sample = 100;
sample = "1000000";
// sample = null;

console.info(sample);


function process(value: number | string | boolean) {
    if(typeof value === "string"){
        return value.toUpperCase()
    
    } else if (typeof value === "number"){
        return value + 2;
    } else {
        return !value
    }
}
console.log(process("dadsadas"));

