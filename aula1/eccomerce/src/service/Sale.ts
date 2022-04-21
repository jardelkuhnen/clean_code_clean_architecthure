import Item from "../model/Item";
import Sale from "../model/Sale";
import { isCpfCnpjValid } from "../util/CpfValidator";


export function createSale(cpf: string, itens: Item[], priceTransport: number, taxValue: number, discount: number): Sale {
    if (!isCpfCnpjValid(cpf)) {
        throw new Error("Cpf is invalid!");
    }
    return new Sale(cpf, itens, priceTransport, taxValue, discount);
}