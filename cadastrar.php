<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $dados = [
        'nome' => $_POST['nome'],
        'email' => $_POST['email'],
        'senha' => password_hash($_POST['senha'], PASSWORD_DEFAULT),
        'telefone' => $_POST['telefone'],
        'cep' => $_POST['cep'],
        'logradouro' => $_POST['logradouro'],
        'numero' => $_POST['numero'],
        'bairro' => $_POST['bairro'],
        'cidade' => $_POST['cidade'],
        'estado' => $_POST['estado'],
    ];

    $usuarios = [];

    if (file_exists('usuarios.json')) {
        $usuarios = json_decode(file_get_contents('usuarios.json'), true);
    }

    $usuarios[] = $dados;

    file_put_contents('usuarios.json', json_encode($usuarios, JSON_PRETTY_PRINT));

    echo json_encode(['status' => 'ok', 'mensagem' => 'Cadastro feito com sucesso!']);
} else {
    echo json_encode(['status' => 'erro', 'mensagem' => 'Método inválido']);
}
