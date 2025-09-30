const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("Bem-vindo ao meu app");
});

app.get("/sobre", function(req,res){
    res.send("Bem-vindo a minha pagina sobre");
});

app.get("/blog", function(req,res){
    res.send("Bem-vindo ao meu blog!");
});

app.get("/livedeteste", function(req,res){
    res.send("roberio");
});

app.get("/rotaDeTeste", function(req,res){
    res.send("Hahay");
});

app.listen(8081, function(){console.log("Servidor rodando")});