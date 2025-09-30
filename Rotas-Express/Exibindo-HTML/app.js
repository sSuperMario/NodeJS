const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/sobre", function(req,res){
    res.sendFile(__dirname + "/html/sobre.html");
});

app.get("/blog", function(req,res){
    res.send("Bem-vindo ao meu blog!");
});

app.get("/ola/:nome/:cargo/:cor", function(req,res){
    res.send("Ola "+ req.params.nome + " | Seu cargo é : "+ req.params.cargo + " | Sua Cor é : "+ req.params.cor + "");
});


app.listen(8081, function(){console.log("Servidor rodando")});