// class Counter {
//     private counter: number = 12;

//     public increment(): void {
//         this.counter++
//     }

//     protected decrement(): void {
//         this.counter--;
//     }

//     public getCount(): number {
//         return this.counter;
//     }

// }






// class EnhancedCouter extends Counter {
//     public decrementCounter(): void {
//         this.decrement();
//     }
// }


// class Enhanced {
//     protected counter = 0;

// }


// class doublecounter extends Enhanced{
//     public increment(): void {
//         this.counter += 2;
//     }
// }


// const tambahDua = new doublecounter();

// tambahDua.increment();
// tambahDua.increment();
// tambahDua.increment();
// console.info(tambahDua)




// // Usage
// const tambah = new Counter();
// tambah.increment()
// tambah.increment()
// tambah.increment()


// const enhancedKurang = new EnhancedCouter()
// enhancedKurang.decrementCounter()



// const nilaiAkhir = tambah.getCount();
// console.info({nilaiAkhir})



class Tambah {
    // private
    private nilai = 0;
    // public
    public tambah() {
        this.nilai++;
    }
    // protected
    protected kurang(){
        this.nilai--;
    }

}

class kurang extends Tambah {
    //pangil proteted
    kurang(): void {
       super.kurang();
   }
}



const nilai1 = new Tambah();
nilai1.tambah()
console.info(nilai1)


const nilai2 = new kurang();
nilai2.kurang()
console.info(nilai2)


