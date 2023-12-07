function previewImage(input) {
    var preview = document.getElementById('preview');
    var file = input.files[0];
    
    if (file) {
        var reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    } else {
        preview.src = '#';
        preview.style.display = 'none';
    }
}

document.getElementById('cadastroForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const respostasFormulario = {
        especie: document.getElementById('especie').value,
        nome: document.getElementById('nome').value,
        raca: document.getElementById('raca').value,
        idade: document.getElementById('idade').value,
        telefone: document.getElementById('tel').value,
        sexo: document.getElementById('sexo').value,
        imagem: document.getElementById('imagem').files.length > 0 ?
            URL.createObjectURL(document.getElementById('imagem').files[0]) : ''
    };

    // Armazenar os dados no localStorage
    localStorage.setItem('cadastroPet', JSON.stringify(respostasFormulario));

    // Redirecionar para a página de cards
    window.location.href = 'pets_disponiveis.html';
});
