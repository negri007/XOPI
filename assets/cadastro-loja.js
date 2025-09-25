document.getElementById('formLojinha').addEventListener('submit', function(e) {
  e.preventDefault();

  const lojinha = {
    nomeLoja: document.getElementById('nomeLojinha').value,
    vendedor: document.getElementById('nomeVendedor').value,
    email: document.getElementById('emailContato').value,
    telefone: document.getElementById('telefoneContato').value || "Não informado"
  };

  let lojinhas = JSON.parse(localStorage.getItem('lojinhas')) || [];

  lojinhas.push(lojinha);

  localStorage.setItem('lojinhas', JSON.stringify(lojinhas));

  alert("Lojinha cadastrada com sucesso!");
  this.reset();
});
