const API_URL = 'http://localhost:3000';

// carregar as informações do filme
async function carregarDadosFilme() {
    const urlParams = new URLSearchParams(window.location.search); // Pega o ID da URL
    const id = urlParams.get('id');

    if (!id) {
        alert('ID do filme não encontrado!');
        return;
    }

    try {
        const response = await fetch(`${API_URL}/filmes/${id}`);
        if (response.ok) {
            const filme = await response.json();
            //const dataFormatada = formatarData(filme.data_lancamento);
            
            document.getElementById('title-movie').value = filme.titulo;
            document.getElementById('date-movie').value = filme.data_lancamento;
            document.getElementById('url-foto').value = filme.url_foto;
            document.getElementById('year-movie').value = filme.ano;
            document.getElementById('description').value = filme.descricao;
        } else {
            alert('Erro ao carregar os dados do filme.');
        }
    } catch (error) {
        console.error('Erro ao carregar o filme:', error);
    }
}

// envia os dados editados 
async function editarFilme(id, dados) {
    try {
        const response = await fetch(`${API_URL}/filmes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dados),
        });

        if (response.ok) {
            alert('Filme atualizado com sucesso!');
            window.location.href = 'verTodosFilmes.html';
        } else {
            alert('Erro ao editar o filme.');
        }
    } catch (error) {
        console.error('Erro ao editar filme:', error);
    }
}

// Configuração do evento do formulário
document.getElementById('movieForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    const id = new URLSearchParams(window.location.search).get('id');
    const dadosAtualizados = {
        titulo: document.getElementById('title-movie').value,
        data_lancamento: document.getElementById('date-movie').value,
        url_foto: document.getElementById('url-foto').value,
        ano: document.getElementById('year-movie').value,
        descricao: document.getElementById('description').value,
    };

    editarFilme(id, dadosAtualizados);
});


//formatar data
function formatarData(data) {
    const dateObj = new Date(data);
    const formato = new Intl.DateTimeFormat('pt-BR');  // Formato brasileiro (dd/mm/yyyy)
    return formato.format(dateObj);
}

carregarDadosFilme();
