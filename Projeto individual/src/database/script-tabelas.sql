-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database mkgpiece;
use mkgpiece;

create table usuario (
	idUsuario int primary key auto_increment,
    nome varchar(45),
    email varchar(45),
    senha varchar(45)
);

create table game (
	idGame int primary key auto_increment
) auto_increment = 5000;

create table resultado_game (
	idResultadoGame int,
	fkUsuario int,
    fkGame int,
    constraint fk_Usuario foreign key (fkUsuario) references usuario(idUsuario),
    constraint fk_Game foreign key (fkGame) references game(idGame),
    primary key(idResultadoGame, fkUsuario, fkGame),
	pontuacao varchar(45),
    capitao varchar(45)
);

select * from usuario;