export namespace MathUtil {
    export const PI:number = 3.14;


    export function sum(...values: number[]): number {
        let total = 0;
        for(let value of values){
            total += value;
        }
        return total;
    }

    export function kurang(...values: number[]): number {
        let hasil  = 0;
        for(let value of values){
            hasil -= value;
        }
        return hasil;
    }

    export function Bagi(...values: number[]): number {
        let  total = 0;
        for(let value of values){
            total /= value;
        }

        return total;
    }



}