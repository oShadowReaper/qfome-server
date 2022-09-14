create table cliente(
    idcliente serial primary key,
    nome VARCHAR(50),
    email VARCHAR(100),
    senha VARCHAR(20),
    icon VARCHAR(250)
    telefone CHAR(11)

);

create table produto(
    idproduto serial primary key,
    nome VARCHAR(50),
    preco INT,
    imagem VARCHAR(250)

);

create table pedido(
    idcliente INT,
    idproduto INT,
    foreign key(idcliente) references cliente (idcliente),
    foreign key(idproduto) references produto (idproduto)
)