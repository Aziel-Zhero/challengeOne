function somaMultiplos(limit) {
  let soma = 0;
  let divisivel = [];

  for (let i = 1; i < limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      soma += i;
      divisivel.push(i);
    }
  }

  document.getElementById(
    "divisivel"
  ).innerHTML = `Números somados: ${divisivel.join(", ")}`;

  return soma;
}

function calcular() {
  const inputNumber = parseInt(
    document.getElementById("inputNumber").value,
    10
  );
  const resultado = somaMultiplos(inputNumber);
  document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
}
