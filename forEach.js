const carros = [
  {
    // 0
    nome: "Palio",
    marca: "FIAT",
    preco: 20000,
  },
  {
    // 1
    nome: "Gol",
    marca: "Wolskwagem",
    preco: 25000,
  },
  {
    // 2
    nome: "Kwid",
    marca: "Renault",
    preco: 35000,
  },
];

carros.forEach(function (carro) {
  const { nome, marca, preco} = carro;
  console.log(`O ${nome} da marca ${marca} custa R$ ${preco}`);
});
