// Questão 1
const expressao = (num1, num2) => {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
  console.log(`${num1} - ${num2} = ${num1 - num2}`);
  console.log(`${num1} x ${num2} = ${num1 * num2}`);
  console.log(`${num1} + ${num2} = ${num1 * num2}`);
  console.log(`${num1} / ${num2} = ${num1 / num2}`);
};

// Questão 2
const triangulos = (lado1, lado2, lado3) => {
  if ((lado1 === lado2) === lado3) {
    console.log('O triângulo é Equilátero');
  } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log('O triângulo é Isósceles');
  } else {
    console.log('O triângulo é Equilátero');
  }
};

// Questão 3
const baseElevada = (base, expoente) => {
  console.log(base ** expoente);
};
baseElevada(3, 5);

// Questão 4
const dividendoDivisor = (dividendo, divisor) => {
  console.log(`${dividendo} / ${divisor}: ${dividendo / divisor}`);
  console.log(`O resto da divisão é ${dividendo % divisor}`);
};

// Questão 5
const real = (valor) => {
  console.log(
    valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
  );
};
real(0.30000000000000004);

// Questão 6
const jurosSimples = (capitalInicial, taxaJuros, tempoAplicacao) => {
  const conta =
    (taxaJuros / 100) * capitalInicial * tempoAplicacao + capitalInicial;
  console.log(`Montante final juros simples: ${conta}`);
};

const jurosCompostos = (capitalInicial, taxaJuros, tempoAplicacao) => {};
