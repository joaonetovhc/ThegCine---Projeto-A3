const API_URL = 'http://localhost:3000'; 
const filmesContainer = document.getElementById('filmes-recomendados'); 

// busca os filmes
async function buscarFilmes() {
    try {
        // Fazendo a requisição para a API
        const response = await fetch(`${API_URL}/filmes`);
        const filmes = await response.json();
        
        // Exibe os filmes na página
        exibirFilmes(filmes);
    } catch (error) {
        console.error('Erro ao buscar filmes:', error);
        alert('Erro ao carregar filmes.');
    }
}

// exibe os filmes
function exibirFilmes(filmes) {
    filmesContainer.innerHTML = '';

    filmes.forEach(filme => {
        const article = document.createElement('article');
        article.className = 'card';

        article.innerHTML = `
            <img src="${filme.url_foto}" alt="Capa do filme ${filme.titulo}">
            <h3>${filme.titulo}</h3>
            <h3>${filme.data_lancamento}</h3>
        `;

        filmesContainer.appendChild(article);
    });
}

document.addEventListener('DOMContentLoaded', buscarFilmes);
