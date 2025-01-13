class Counter {
    private counter: number = 12;

    public increment(): void {
        this.counter++
    }

    protected decrement(): void {
        this.counter--;
    }

    public getCount(): number {
        return this.counter;
    }

}


class EnhancedCouter extends Counter {
    public decrementCounter(): void {
        this.decrement();
    }
}


class Enhanced {
    protected counter = 0;

}


class doublecounter extends Enhanced{
    public increment(): void {
        this.counter += 2;
    }
}


const tambahDua = new doublecounter();

tambahDua.increment();
tambahDua.increment();
tambahDua.increment();
console.info(tambahDua)




// Usage
const tambah = new Counter();
tambah.increment()
tambah.increment()
tambah.increment()


const enhancedKurang = new EnhancedCouter()
enhancedKurang.decrementCounter()



const nilaiAkhir = tambah.getCount();
console.info({nilaiAkhir})