
document.addEventListener("DOMContentLoaded", () => {
  const funcionarios = [
    { nome: "João Silva", cargo: "Vendedor", depto: "Comercial", admissao: "10/01/2023", status: "ativo", avatar: "/assets/img/avatar1.png" },
    { nome: "Maria Souza", cargo: "Atendimento", depto: "Suporte", admissao: "05/06/2022", status: "ativo", avatar: "/assets/img/avatar2.png" },
    { nome: "Pedro Gomes", cargo: "Caixa", depto: "Financeiro", admissao: "15/09/2021", status: "inativo", avatar: "/assets/img/avatar3.png" },
    { nome: "Joaquim Fonseca", cargo: "Administrador", depto: "Financeiro", admissao: "15/01/2020", status: "ativo", avatar: "/assets/img/avatar1.png" },
    { nome: "Joana Madara ", cargo: "Gerente", depto: "Gerencia", admissao: "05/02/2018", status: "ativo", avatar: "/assets/img/avatar2.png" },
    { nome: "jeniffer rastafar", cargo: "Faxina", depto: "Suporte", admissao: "10/09/2024", status: "inativo", avatar: "/assets/img/avatar3.png" }
  ];

  const corpo = document.getElementById("corpoTabela");
  const msgVazio = document.getElementById("mensagem-vazio");

  function renderizarLista(lista) {
    corpo.innerHTML = "";
    if (lista.length === 0) {
      msgVazio.style.display = "block";
    } else {
      msgVazio.style.display = "none";
      lista.forEach(f => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td><img src="${f.avatar}" alt="${f.nome}" class="avatar"></td>
          <td>${f.nome}</td>
          <td>${f.cargo}</td>
          <td>${f.depto}</td>
          <td>${f.admissao}</td>
          <td style="color:${f.status === "ativo" ? "green" : "red"}">${f.status}</td>
          <td>
            <button>Editar</button>
            <button>Excluir</button>
          </td>
        `;
        corpo.appendChild(tr);
      });
    }
  }

  // inicial
  renderizarLista(funcionarios);

  // filtro de nome
  document.getElementById("buscaNome").addEventListener("input", (e) => {
    const termo = e.target.value.toLowerCase();
    const filtrados = funcionarios.filter(f => f.nome.toLowerCase().includes(termo));
    renderizarLista(filtrados);
  });

  // filtro de status
  document.getElementById("filtroStatus").addEventListener("change", (e) => {
    const valor = e.target.value;
    let filtrados = funcionarios;
    if (valor) {
      filtrados = funcionarios.filter(f => f.status === valor);
    }
    renderizarLista(filtrados);
  });
});
