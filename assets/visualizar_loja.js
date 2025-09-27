
const produtos = [
  {
    nome: "Camiseta Xhopii",
    preco: "R$ 49,90",
    imagem: "/assets/img/produto1.jpg"
  },
  {
    nome: "Fone de Ouvido Bluetooth",
    preco: "R$ 120,00",
    imagem: "/assets/img/produto2.jpg"
  },
  {
    nome: "Relógio Digital",
    preco: "R$ 89,90",
    imagem: "/assets/img/produto3.jpg"
  },
  {
    nome: "Tênis Confortável",
    preco: "R$ 199,00",
    imagem: "/assets/img/produto4.jpg"
  },
  {
    nome: "Bolsa Feminina",
    preco: "R$ 150,00",
    imagem: "/assets/img/produto5.jpg"
  },
  {
    nome: "Carregador Rápido",
    preco: "R$ 79,90",
    imagem: "/assets/img/produto6.jpg"
  }
];

// Preencher produtos no HTML
const listaProdutos = document.getElementById("listaProdutos");

produtos.forEach(produto => {
  const div = document.createElement("div");
  div.classList.add("produto");

  div.innerHTML = `
    <img src="${produto.imagem}" alt="${produto.nome}">
    <h3>${produto.nome}</h3>
    <p>${produto.preco}</p>
    <button>Comprar</button>
  `;

  listaProdutos.appendChild(div);
});

// Botão "Seguir Loja"
const seguirBtn = document.getElementById("seguirBtn");
seguirBtn.addEventListener("click", () => {
  if (seguirBtn.innerText === "Seguir") {
    seguirBtn.innerText = "Seguindo ✓";
    seguirBtn.style.background = "gray";
  } else {
    seguirBtn.innerText = "Seguir";
    seguirBtn.style.background = "orangered";
  }
});