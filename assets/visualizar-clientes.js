document.addEventListener('DOMContentLoaded', () => {
    const formAdicionarCliente = document.getElementById('formAdicionarCliente');
    const tabelaCorpoClientes = document.getElementById('tabelaCorpoClientes');

    let proximoId = 6;

    formAdicionarCliente.addEventListener('submit', (event) => {
        event.preventDefault();

        const nome = document.getElementById('nomeCliente').value;
        const email = document.getElementById('emailCliente').value;
        const telefone = document.getElementById('telefoneCliente').value;
        const endereco = document.getElementById('enderecoCliente').value;

        adicionarClienteATabela(proximoId, nome, email, telefone, endereco);

        proximoId++;
        formAdicionarCliente.reset();
    });

    tabelaCorpoClientes.addEventListener('click', (event) => {
        if (event.target.classList.contains('botao-excluir')) {
            const linha = event.target.closest('tr');
            if (confirm('Tem certeza que deseja excluir este cliente?')) {
                linha.remove();
            }
        }
    
        if (event.target.classList.contains('botao-editar')) {
            alert('Funcionalidade de Editar em desenvolvimento!');
      
        }
    });

    function adicionarClienteATabela(id, nome, email, telefone, endereco) {
        const novaLinha = document.createElement('tr');
        novaLinha.innerHTML = `
            <td>${id}</td>
            <td>${nome}</td>
            <td>${email}</td>
            <td>${telefone}</td>
            <td>${endereco}</td>
            <td class="botoes-acao">
                <button class="botao-editar">Editar</button>
                <button class="botao-excluir">Excluir</button>
            </td>
        `;
        tabelaCorpoClientes.appendChild(novaLinha);
    }
});