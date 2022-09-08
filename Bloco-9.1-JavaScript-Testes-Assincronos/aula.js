//Operações assincronas

// const pushNumber = (list, number) => list.push(number);

// const numbers = [];

// pushNumber(numbers, 1);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// console.log(numbers);

    // Agora, vamos colocar assincronicidade em nosso código com o setTimeout.

// pushNumberAsync.js

// const pushNumber = (list, number) => list.push(number);

// const numbers = [];

// const THREE_SECONDS = 3000;

// setTimeout(() => pushNumber(numbers, 1), THREE_SECONDS);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// console.log(numbers);

    // Como o console.log é uma função síncrona, ele é executado antes de o setTimeout terminar.
    // Para que o console.log mostre o array correto, é necessário chamá-lo após 3000 milissegundos:
   

// const pushNumber = (list, number) => list.push(number);

// const numbers = [];

// const THREE_SECONDS = 3000;

// setTimeout(() => pushNumber(numbers, 1), THREE_SECONDS);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// setTimeout(() => console.log(numbers), THREE_SECONDS);

// Observe que, além de adicionar o setTimeout, o array [1, 2, 3] foi modificado para [2, 3, 1]. 
//Isso se dá porque, como a função é assíncrona, o código continua rodando, mesmo que ela ainda não tenha terminado de executar. 
//Ou seja, o array recebe primeiro o 2, depois o 3, e após os 3 segundos do setTimeout, ele recebe o 1.

//-------------------------------------------------------------------------------------------

//Callbacks
// callback é uma função passada como parâmetro para outra função.
// despesas.js

// const minhasDespesas = [ { academia: 99, }, { ifood: 200, }, { celular: 60, }, { internet: 100, }, ];
// const minhaRenda = 1000;

// const despesaMensal = (renda, despesas, callback) => {
//     const despesaTotal = callback(despesas);
//     const saldoFinal = renda - despesaTotal;
  
//     console.log(`Balanço do mês:
//       Recebido: R$${renda},00
//       Gasto: R$${despesaTotal},00
//       Saldo: R$${saldoFinal},00 `);
//   };

//   const somaDespesas = (despesas) => {
//     const custoItem = despesas.map((item) => Object.values(item));
//     const despesaTotal = custoItem.reduce((acc, curr) => {
//       const soma = acc + curr[0];
//       // acc é a sigla para accumulator (acumulador)
//       // curr é a sigla para current_value (valor atual)
//       return soma;
//     }, 0);
//     return despesaTotal;
//   };

//   despesaMensal(minhaRenda, minhasDespesas, somaDespesas);