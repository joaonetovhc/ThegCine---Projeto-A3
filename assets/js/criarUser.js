const API_URL = 'http://localhost:3000';


// criar usuario
async function criarUsuario(event) {
    event.preventDefault(); 

    // Pegando os valores dos campos
    const nome = document.getElementById('username').value;
    const senha = document.getElementById('password').value;

    if (!username || !password) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    try {
        const response = await fetch(`${API_URL}/registrar`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome,
                senha
            })
        });

        if (response.ok) {
            const result = await response.json();
            alert("Usuário criado com sucesso!");
            window.location.href = 'index.html';
        } else {
            alert("Erro ao criar o usuário.");
        }
    } catch (error) {
        console.error("Erro ao enviar dados:", error);
        alert("Erro no servidor.");
    }
}

document.getElementById('loginForm').addEventListener('submit', criarUsuario);
