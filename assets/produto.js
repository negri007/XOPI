function trocarImagemSelecionada(imagemClicada) {
    document.getElementById('imagemPrincipal').src = imagemClicada.src;

    const id = imagemClicada.id;
    const precoElement = document.getElementById('precoAtual');
    const estoqueElement = document.getElementById('estoqueDisponivel');

    precoElement.innerHTML = "R$56,90"; // Preço fixo para todos os modelos

    if (id === "corPreto") {
        estoqueElement.innerHTML = "98 peças disponíveis";
    } else if (id === "corAzul") {
        estoqueElement.innerHTML = "120 peças disponíveis";
    } else if (id === "corVerde") {
        estoqueElement.innerHTML = "75 peças disponíveis";
    } else if (id === "corCinza") {
        estoqueElement.innerHTML = "60 peças disponíveis";
    } else if (id === "corRosa") {
        estoqueElement.innerHTML = "45 peças disponíveis";
    }
}

function atualizarProdutoPorCor(botaoClicado) {
    const imgPrincipal = document.getElementById('imagemPrincipal');
    const precoElement = document.getElementById('precoAtual');
    const estoqueElement = document.getElementById('estoqueDisponivel');

    precoElement.innerHTML = "R$56,90"; // Preço fixo

    switch (botaoClicado.id) {
        case "btnCorPreto":
            estoqueElement.innerHTML = "98 peças disponíveis";
            imgPrincipal.src = "../assets/img/produto1.png";
            break;
        case "btnCorAzul":
            estoqueElement.innerHTML = "120 peças disponíveis";
            imgPrincipal.src = "../assets/img/produto2.png";
            break;
        case "btnCorVerde":
            estoqueElement.innerHTML = "75 peças disponíveis";
            imgPrincipal.src = "../assets/img/produto3.png";
            break;
        case "btnCorCinza":
            estoqueElement.innerHTML = "60 peças disponíveis";
            imgPrincipal.src = "../assets/img/produto4.png";
            break;
        case "btnCorRosa":
            estoqueElement.innerHTML = "45 peças disponíveis";
            imgPrincipal.src = "../assets/img/produto5.png";
            break;
    }
}

function ajustarEstoquePorTamanho(botaoTamanho) {
    const tamanhoEscolhido = botaoTamanho.textContent;
    document.getElementById('tamanhoAtual').innerHTML = "Tamanho Selecionado: " + tamanhoEscolhido;

    const estoqueElement = document.getElementById('estoqueDisponivel');

    switch (botaoTamanho.id) {
        case "btnTamP":
            estoqueElement.innerHTML = "40 peças disponíveis";
            break;
        case "btnTamM":
            estoqueElement.innerHTML = "30 peças disponíveis";
            break;
        case "btnTamG":
            estoqueElement.innerHTML = "20 peças disponíveis";
            break;
        case "btnTamGG":
            estoqueElement.innerHTML = "15 peças disponíveis";
            break;
    }
}
