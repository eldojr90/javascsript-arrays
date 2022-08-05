const carros = [
  {
    nome: 'Palio',
    marca: 'FIAT',
    preco: 20000,
  },
  {
    nome: 'Gol',
    marca: 'Wolskwagem',
    preco: 25000,
  },
  {
    nome: 'Kwid',
    marca: 'Renault',
    preco: 35000,
  },
];

//for (of) --- forEach (próximo)
for (carro of carros) {
  console.log(carro);
}
