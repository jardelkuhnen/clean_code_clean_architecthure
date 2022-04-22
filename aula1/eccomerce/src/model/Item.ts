export default class Item {
    
    constructor(readonly description: string, readonly price: number, readonly amount: number){
        this.description = description;
        this.price = price;
        this.amount = amount;
    }
}