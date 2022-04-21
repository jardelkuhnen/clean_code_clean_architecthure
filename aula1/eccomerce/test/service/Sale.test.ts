import Item from "../../src/model/Item";
import { createSale } from "../../src/service/Sale";

test("Não deve criar um pedido com cpf inválido", function () {
    expect(() => {
        createSale("", [], 0, 0, 0);
    }).toThrow(new Error("Cpf is invalid!"))
});


test("Deve criar um pedido com 3 itens sem desconto", function () {
    const cpf = "625.762.180-16";
    const item1 = new Item("Cerveja", 10, 1);
    const item2 = new Item("Carne", 10, 1);
    const item3 = new Item("Carvão", 10, 1);
    const result = createSale(cpf, [item1, item2, item3], 2, 10, 0);
    
    expect(result).not.toBeNull();
    expect(result.cpf).toBe(cpf);
    expect(result.totalSale).toBe(42);
});

test("Deve criar um pedido com 3 itens e com desconto", function () {
    const cpf = "782.337.420-07";
    const item1 = new Item("Cerveja", 10, 1);
    const item2 = new Item("Carne", 10, 1);
    const item3 = new Item("Carvão", 10, 1);
    const result = createSale(cpf, [item1, item2, item3], 2, 10, 35);
    
    expect(result).not.toBeNull();
    expect(result.cpf).toBe(cpf);
    expect(result.totalSale).toBe(27.3);
});