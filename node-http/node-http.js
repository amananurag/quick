const http = require('http');
const url = require('url');
const httpserver = http.createServer();



httpserver.on('request', (req, res)=> {
    // to parse query string, true is passes as second arguement.
    const parsedUrl = url.parse(req.url, true);
     const {id} = parsedUrl?.query;
     console.log(id);
    console.log(parsedUrl);
})

httpserver.listen(8080,()=>{
    console.log('listenning on port 8080');
});