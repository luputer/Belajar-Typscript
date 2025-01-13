class Configiration {
    static NAME: string = "Belajar TypeScript OOP"
    static VERSION: number = 1.0;
    static AUTOR: string = "Muhammad saidi"
} 

console.info(Configiration.NAME)
console.info(Configiration.VERSION)
console.info(Configiration.AUTOR)

class MathUtil {
    static sum(...valus: number[]): number {
        let total = 0;
        for(let value of valus){
            total += value
        }
        return total;
    }
}

console.info(MathUtil.sum(1,2,3,8,9))