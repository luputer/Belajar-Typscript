class ValidatorError {
    constructor(public message: string){
        this.message = message;
    }
}

function dobleIt(value: number): number {
    if(value < 0){
        throw new ValidatorError("Value cannot be less than 0")
    }
    return value * 2;
}


try {
    const result = dobleIt(-1);
    console.info(result);
} catch (e) {
    if(e  instanceof ValidatorError) {
        console.error(e.message)
    }  
}
