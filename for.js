const carros = [
  { // 0
    nome: 'Palio',
    marca: 'FIAT',
    preco: 20000,
  },
  { // 1
    nome: 'Gol',
    marca: 'Wolskwagem',
    preco: 25000,
  },
  { // 2
    nome: 'Kwid',
    marca: 'Renault',
    preco: 35000,
  },
];

//for                           
for (let index = 0; index < carros.length; index++) {
  const carro = carros[index];
  console.log(carro);
}
