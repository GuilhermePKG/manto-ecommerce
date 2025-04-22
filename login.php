<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    if (!file_exists('usuarios.json')) {
        echo json_encode(['status' => 'erro', 'mensagem' => 'Nenhum usuário cadastrado.']);
        exit;
    }

    $usuarios = json_decode(file_get_contents('usuarios.json'), true);

    foreach ($usuarios as $usuario) {
        if ($usuario['email'] === $email && password_verify($senha, $usuario['senha'])) {
            session_start();
            $_SESSION['usuario'] = $usuario['nome'];
            echo json_encode(['status' => 'ok', 'mensagem' => 'Login realizado com sucesso!']);
            exit;
        }
    }

    echo json_encode(['status' => 'erro', 'mensagem' => 'Email ou senha incorretos.']);
} else {
    echo json_encode(['status' => 'erro', 'mensagem' => 'Método inválido']);
}
