const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', 'mario2024igt', {
    host: "localhost",
    dialect: 'mysql'
})

const Postagem = sequelize.define('postagens', {
    titulo:{
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
})


const Usuarios = sequelize.define('usuarios',{
    nome: {
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})


Usuarios.create({
    nome:"Mario Henrique",
    sobrenome:"da Silva",
    idade:17,
    email:"teste@gmail.com"
})