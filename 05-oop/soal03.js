class Phone {
    constructor(brand, storage, ram) {
        this.brand = brand;
        this.storage = storage;
        this.ram = ram;
    }
    getBrandName() {
        return this.brand
    }
    setBrandName(brd) {
        this.brand = brd
    }
    printSpecification() {
        console.log(`Ponsel ini memiliki storage: ${this.storage} dan ram: ${this.ram}`)
    }
    setSpecification(stor, ram) {
        this.storage = stor
        this.ram = ram
    }
}