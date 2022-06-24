//http
const http= require("http");

const server= http.createServer((req, resp)=>{
    //req: request process
    //resp: for writimg response
    resp.writeHead(200, {'content-type': 'text/html'});
    resp.write("<h1>This is the first reesponse from Server</h1>");
    resp.write('<h2>GREAT JOB </h2>');
    resp.write('<button>Try me</button>');
    resp.end("ok bye bye");
});

server.listen(9090);