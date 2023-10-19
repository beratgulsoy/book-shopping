 const http = require('http');
 const fs = require('fs');



const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.setHeader('Contont-Type', 'text/html');
        res.write('<html><head><meta charset="UTF-8"/><title>Enter Message</title></head><body><form action="/message" method="POST"><input type="text" name="msg"><button onclick="submit">Gönder</button></form></body></html>');
        res.end();
    }
    if(url === '/message' && method === 'POST') {
        fs.writeFileSync('message.txt', 'DUMMY');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end;
    }
});

server.listen(3000);