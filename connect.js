const Sequelize = require('sequelize');

//Cria os parametros de conexão
const sequelize = new Sequelize('db_nodejs','usuario','senha', {
    host: "localhost",//localhost
    dialect: "mysql",
    dialectOptions: {connectTimeout: 1000}
})

//Verifica se está conectado
sequelize.authenticate().then(function(){
    console.log('Conectado')
}).catch(function(erro){
    console.log("erro "+ erro)
})

//Cria a tabela <postagens> com as colunas <titulo> , <conteudo>
const Postagens = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

//Cria a tabela <usuarios> com as colunas <nome>, <sobrenome>, <idade>, <email>
const Usuarios = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }
})

//Ao executar as linhas abaixo ira automaticamente criar as tabelas, apos criar comente.
Postagens.sync({ force: true})
Usuarios.sync({ force: true})

//Faz um Insert com os dados <titulo> , <conteudo>
Postagens.create({
    titulo: 'Um novo titulo',
    conteudo: "Esse e um novo conteudo"
})
