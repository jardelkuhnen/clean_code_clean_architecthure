import Coupon from "../../src/model/Coupon";
import Item from "../../src/model/Item";
import Order from "../../src/model/Order";

test("Não deve criar um pedido com cpf inválido", function () {
    expect(() => new Order("11111111111")).toThrow(new Error("Cpf Inválido"));
})

test("Deve criar um pedido com 3 itens (com descrição, preço e quantidade)", function () {
    const order = new Order("09717775940");
    order.addItem(new Item(1, "Cama", 1500), 1);
    order.addItem(new Item(1, "Travesseiro", 50), 2);
    order.addItem(new Item(1, "Cobertor", 100), 1);

    const total = order.getTotal();
    expect(total).toBe(1700);
})

test("Deve criar um pedido com 3 itens (com descrição, preço e quantidade) com coupom", function () {
    const order = new Order("09717775940");
    order.addItem(new Item(1, "Cama", 1500), 1);
    order.addItem(new Item(1, "Travesseiro", 50), 2);
    order.addItem(new Item(1, "Cobertor", 100), 1);
    order.addCoupon(new Coupon("VALE20", 20))
    const total = order.getTotal();
    expect(total).toBe(1360);
})