const API_URL = 'http://localhost:3000'; // Endereço da API

// Função para logar o usuário
async function logarUsuario(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário (recarregar a página)

    // Pegando os valores dos campos
    const nome = document.getElementById('username').value;
    const senha = document.getElementById('password').value;

    // Validando se os campos estão preenchidos
    if (!nome || !senha) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    try {
        const response = await fetch(`${API_URL}/login`, {
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
            alert("Login bem-sucedido!");
            window.location.href = "/verTodosFilmes.html"; 
        } else {
            const error = await response.json();
            alert(error.message || "Erro ao fazer login.");
        }
    } catch (error) {
        console.error("Erro ao enviar dados:", error);
        alert("Erro no servidor.");
    }
}

document.getElementById('loginForm').addEventListener('submit', logarUsuario);
