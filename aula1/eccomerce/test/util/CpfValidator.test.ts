import { isCpfCnpjValid } from "../../src/util/CpfValidator";

test("Deve retornar true por cpf valido", function () {
    const cpf = "09717775940";
    const result = isCpfCnpjValid(cpf);
    expect(result).toBe(true);
});

test("Deve retornar false por cpf invalido", function () {
    const cpf = "";
    const result = isCpfCnpjValid(cpf);
    expect(result).toBe(false);
});

test("Deve retornar false por cpf invalido", function () {
    const cpf = "7264856200015777";
    const result = isCpfCnpjValid(cpf);
    expect(result).toBe(false);
});

test("Deve retornar true por cpf valido com formatação normal nnn.nnn.nnn-nn", function () {
    const cpf = "782.337.420-07";
    const result = isCpfCnpjValid(cpf);
    expect(result).toBe(true);
});

test("Deve retornar true por cpf valido sem formatação", function () {
    const cpf = "78233742007";
    const result = isCpfCnpjValid(cpf);
    expect(result).toBe(true);
});

test("Deve retornar true por cpf valido com formatação parcial nnnnnnnnn-nn", function () {
    const cpf = "782337420-07";
    const result = isCpfCnpjValid(cpf);
    expect(result).toBe(true);
});