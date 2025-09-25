document.getElementById('formCupom').addEventListener('submit', function(e) {
  e.preventDefault();

  const codigo = document.getElementById('codigo').value;
  const desconto = document.getElementById('desconto').value;
  const validade = document.getElementById('validade').value;

  const novoCupom = {
    codigo,
    desconto,
    validade
  };

 
  let cuponsSalvos = JSON.parse(localStorage.getItem('cupons')) || [];


  cuponsSalvos.push(novoCupom);


  localStorage.setItem('cupons', JSON.stringify(cuponsSalvos));

  alert("Cupom cadastrado com sucesso!");
  this.reset();
});
