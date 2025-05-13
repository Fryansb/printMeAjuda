document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form-indicacao');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const dados = new FormData(form);
    const nome = dados.get('nome');
    const email = dados.get('email');
    const livro = dados.get('livro');
    const observacao = dados.get('observacao');

    console.log({ nome, email, livro, observacao });
    alert('Sugestão enviada com sucesso! Obrigado por nós ajudar');
    form.reset();
  });
});
