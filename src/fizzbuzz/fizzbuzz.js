function fizzbuzz(numero) {
  let resultado = "";

  if (numero === 0) {
    return numero;
  }

  if (numero % 3 === 0) {
    resultado = "Fizz";
  }

  if (numero % 5 === 0) {
    resultado += "Buzz";
  }
  if (resultado.length) {
    return resultado;
  }
  return numero;
}

module.exports = fizzbuzz;
