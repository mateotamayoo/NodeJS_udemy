import http from 'http'
import fs from 'fs'


const server = http.createServer((req,res) => {
    
    // console.log(req.url);

    // res.writeHead(200, {'Content-type': 'text/html'});
    // res.write('<h1>Hola laura!</h1>');
    // res.end();

    // const data = { name: 'hon', age: 20};
    // res.writeHead(200, {'Content-type': 'application/json'});
    // res.end(JSON.stringify(data));

    if(req.url === '/') {
        const htmlFile = fs.readFileSync('./public/index.html', 'utf-8');
        res.writeHead(200,{'Content-type': 'text/html'});
        res.end(htmlFile)
        return;
    }

    if(req.url?.endsWith('.js')) {
        res.writeHead(200, {'content-type': 'application/javascript'});
    }

});

server.listen(8080, () => {
    console.log('listen in 8080');
});
