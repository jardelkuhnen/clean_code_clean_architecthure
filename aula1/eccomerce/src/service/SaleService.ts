import Item from "../model/Item";
import Sale from "../model/Sale";
import { isCpfValid } from "../util/CpfValidator";

export default class SaleService {
    static sales: Sale[] = [];

    static createSale(cpf: string, itens: Item[], priceTransport: number, taxValue: number, discount: number): Sale {
        if (!isCpfValid(cpf)) {
            throw new Error("Cpf is invalid!");
        }
        let sale = new Sale(cpf, itens, priceTransport, taxValue, discount);
        this.sales.push(sale);
        return sale;
    }

    static cancelSale(id: string): boolean {
        for (let index = 0; index < this.sales.length; index++) {
            const sale = this.sales[index];
            if (sale.id == id) {
                this.sales.splice(this.sales.indexOf(sale));
                return true;
            }
        }
        return false;
    }
}