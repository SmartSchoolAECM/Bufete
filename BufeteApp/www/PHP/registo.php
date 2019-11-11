<?php
$servername = "aecm.elementalwolves.com";
$username = "dbaecm";
$password = "xu6Hw8_5";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Erro de Base de Dados: " . $conn->connect_error);
}
//Get Dados Registo
$Processo = $_GET["Processo"];
$Password = $_GET["Password"];
$Ncartao = $_GET["Ncartao"];
$Idade = $_GET["Idade"];
$Turma = $_GET["Turma"];
$Ano = $_GET["Ano"];
$Nome = $_GET["Nome"];

$sql = "INSERT INTO `aecm_dados`.`Users` (`NProcesso`, `Nome`, `Ano`, `Turma`, `Idade`, `Ncartao`, `Password`) VALUES ('$Processo', '$Nome', '$Ano', '$Turma', '$Idade', '$Ncartao', '$Password')";

if ($conn->query($sql) === TRUE) {
    echo "True";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
die();
?>