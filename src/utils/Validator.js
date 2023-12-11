export function validarCPF(cpf) {
    var numeros = cpf.match(/\d/g).map(Number);
    var soma = numeros.reduce((acc, cur, idx) => {
      if (idx < 9) {
        return acc + cur * (10 - idx);
      }
      return acc;
    }, 0);

    var resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) {
      resto = 0;
    }

    if (resto !== numeros[9]) {
      return false;
    }

    soma = numeros.reduce((acc, cur, idx) => {
      if (idx < 10) {
        return acc + cur * (11 - idx);
      }
      return acc;
    }, 0);

    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) {
      resto = 0;
    }

    if (resto !== numeros[10]) {
      return false;
    }

    return true;
  }

  export function validarCNPJ(cnpj) {
    var numeros = cnpj.match(/\d/g).map(Number);
    var soma = numeros.reduce((acc, cur, idx) => {
      if (idx < 12) {
        if (idx < 4) {
          return acc + cur * (5 - idx);
        }
        if (idx < 8) {
          return acc + cur * (9 - idx);
        }
        if (idx < 11) {
          return acc + cur * (13 - idx);
        }
        return acc + cur * (15 - idx);
      }
      return acc;
    }, 0);

    var resto = soma % 11;

    if (resto < 2) {
      if (numeros[12] !== 0) {
        return false;
      }
    } else if (numeros[12] !== 11 - resto) {
      return false;
    }

    soma = numeros.reduce((acc, cur, idx) => {
      if (idx < 13) {
        if (idx < 5) {
          return acc + cur * (6 - idx);
        }
        if (idx < 9) {
          return acc + cur * (10 - idx);
        }
        if (idx < 12) {
          return acc + cur * (14 - idx);
        }
        return acc + cur * (16 - idx);
      }
      return acc;
    }, 0);

    resto = soma % 11;

    if (resto < 2) {
      if (numeros[13] !== 0) {
        return false;
      }
    } else if (numeros[13] !== 11 - resto) {
      return false;
    }

    return true;
  }