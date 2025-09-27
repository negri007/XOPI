const cupons = [
  { codigo: "XHOP10", validade: "30/10/2025", desconto: "10%", icone: "/assets/img/cupom.png" },
  { codigo: "FTGRATIS", validade: "15/11/2025", desconto: "100% Frete Grátis", icone: "/assets/img/cupom.png" },
  { codigo: "XHOP25", validade: "01/12/2025", desconto: "25%", icone: "/assets/img/cupom.png" },
  { codigo: "PRO15FG", validade: "20/11/2025", desconto: "15% Frete Grátis", icone: "/assets/img/cupom.png" },
  { codigo: "PROMO40", validade: "31/11/2025", desconto: "40%", icone: "/assets/img/cupom.png" },
  { codigo: "PROMO75", validade: "01/11/2025", desconto: "75%", icone: "/assets/img/cupom.png" },
   { codigo: "PROMO90", validade: "05/01/2026", desconto: "90%", icone: "/assets/img/cupom.png" },
    { codigo: "PRO50FG", validade: "25/12/2025", desconto: "50% Frete Grátis", icone: "/assets/img/cupom.png" },
 { codigo: "PROMO20", validade: "20/12/2025", desconto: "20%", icone: "/assets/img/cupom.png" }
];

const lista = document.getElementById("listaCupons");


cupons.forEach(cupom => {
  const div = document.createElement("div");
  div.classList.add("cupom");
   div.innerHTML = `
    <div class="conteudo-cupom">
      <div class="info">
        <h3>Código: ${cupom.codigo}</h3>
        <p><strong>Validade:</strong> ${cupom.validade}</p>
        <p><strong>Desconto:</strong> ${cupom.desconto}</p>
      </div>
      <img class="icone" src="${cupom.icone}" alt="Ícone do cupom">
    </div>
     <div class="botoes-cupom">
      <button class="btn-excluir">Excluir</button>
      <button class="btn-enviar">Enviar</button>
    </div>
  `;

   lista.appendChild(div);

  // Eventos dos botões
  div.querySelector(".btn-excluir").addEventListener("click", () => div.remove());
  div.querySelector(".btn-enviar").addEventListener("click", () => alert(`Cupom ${cupom.codigo} enviado!`));
});

