export function isCpfCnpjValid(cpf: string) {

    if (cpf == null || cpf == undefined) {
        return false;
    }

    if (cpf.length < 11) return false;

    if (cpf.length > 14) return false;

    cpf = cpf.replaceAll(".", "").replaceAll("-", "").replaceAll(" ", "");

    if (!cpf.split("").every(c => c === cpf[0])) {
        try {
            let d1, d2;
            let digitoVerificador1, digitoVerificador2, rest;
            let digito;
            let digitoVerificadorCalculado;
            d1 = d2 = 0;
            digitoVerificador1 = digitoVerificador2 = rest = 0;

            for (let nCount = 1; nCount < cpf.length - 1; nCount++) {

                digito = parseInt(cpf.substring(nCount - 1, nCount));
                d1 = d1 + (11 - nCount) * digito;

                d2 = d2 + (12 - nCount) * digito;
            };

            rest = (d1 % 11);

            digitoVerificador1 = (rest < 2) ? digitoVerificador1 = 0 : 11 - rest;
            d2 += 2 * digitoVerificador1;
            rest = (d2 % 11);
            if (rest < 2)
                digitoVerificador2 = 0;
            else
                digitoVerificador2 = 11 - rest;

            let cpfDigitoVerificador = cpf.substring(cpf.length - 2, cpf.length);
            digitoVerificadorCalculado = "" + digitoVerificador1 + "" + digitoVerificador2;
            return cpfDigitoVerificador == digitoVerificadorCalculado;
        } catch (e) {
            console.error("Erro !" + e);

            return false;
        }
    } else return false

}

