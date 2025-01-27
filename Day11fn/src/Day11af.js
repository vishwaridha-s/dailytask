const http=require('http');
const server=http.createServer((req,res)=>
    res.end("jojjoooo")
);
const port=3000;
server.listen(port);