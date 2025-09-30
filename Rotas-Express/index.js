const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("Hello!");
});

app.get("/sobre", function(req,res){
    res.send("Bem-vindo a minha pagina sobre");
});

app.get("/blog", function(req,res){
    res.send("Bem-vindo ao meu blog!");
});

app.listen(8081, function(){console.log("Servidor rodando")});