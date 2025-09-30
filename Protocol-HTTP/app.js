var http = require('http');
http.createServer(function(req,res){res.end("Hello World. Welcome to te jungle")}).listen(8081);

console.log("o servidor está rodando!")