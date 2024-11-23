const API_URL = 'http://localhost:3000';

// Adicionar novo filme
async function adicionarFilme(event) {
    event.preventDefault();

    // pega os valores dos campos
    const titulo = document.getElementById('title-movie').value;
    const data_lancamento = document.getElementById('date-movie').value;
    const url_foto = document.getElementById('url-foto').value;
    const ano = document.getElementById('year-movie').value;
    const descricao = document.getElementById('description').value;

    if (!titulo || !data_lancamento || !url_foto || !ano || !descricao) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    try {
        const response = await fetch(`${API_URL}/filmes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                titulo,
                data_lancamento,
                url_foto,
                ano,
                descricao
            })
        });

        if (response.ok) {
            alert('Filme adicionado com sucesso!');
            // Redireciona para a lista de filmes
            window.location.href = 'verTodosFilmes.html';
        } else {
            alert('Erro ao adicionar o filme.');
        }
    } catch (error) {
        console.error('Erro ao adicionar filme:', error);
        alert('Erro no servidor.');
    }
}

document.getElementById('movieForm').addEventListener('submit', adicionarFilme);
