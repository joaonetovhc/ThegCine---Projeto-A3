const API_URL = 'http://localhost:3000'; // Endereço da API

const listaFilme = document.getElementById('movie-list');

// redirect para cadastrar novo adm
document.getElementById('add-user').addEventListener('click', function() {
    window.location.href = 'criarUser.html'; 
});
// redirect para adicionar filme
document.getElementById('add-movie-btn').addEventListener('click', function() {
    window.location.href = 'addFilme.html'; // Redireciona para a página de adicionar filme
});

//buscar filmes
async function buscarFilmes() {
    try {
        const response = await fetch(`${API_URL}/filmes`);
        const filmes = await response.json();
        
        exibirFilmes(filmes);
    } catch (error) {
        console.error('Erro ao buscar filmes:', error);
        alert('Erro ao carregar filmes.');
    }
}

// exibir filmes
function exibirFilmes(filmes){
    listaFilme.innerHTML = '';

    filmes.forEach(filme =>{
        const li = document.createElement('li');
        li.className = 'movie-item';

        li.innerHTML = `   <div>
                <strong>${filme.titulo}</strong><br>
                <span>${filme.ano}</span>
            </div>
            <div>
                <button class="btn-edit" onclick="editarFilme(${filme.id})">Editar</button>
                <button class="btn-delete" onclick="deletarFilme(${filme.id})">Excluir</button>
            </div> `;

            listaFilme.appendChild(li);
    });
}

// deletar filme
async function deletarFilme(id) {
    const confirmar = confirm("Tem certeza que deseja excluir o filme?");
    if(!confirmar){
        return;
    }
    try {
        const response = await fetch(`${API_URL}/filmes/${id}`, { method: 'DELETE' });
        if (response.ok) {
            alert('Filme excluído com sucesso!');
            buscarFilmes();
        } else {
            alert('Erro ao excluir o filme.');
        }
    } catch (error) {
        console.error('Erro ao excluir filme:', error);
    }
}

// Editar filme
function editarFilme(id) {
    window.location.href = `editarFilme.html?id=${id}`;
}

buscarFilmes();