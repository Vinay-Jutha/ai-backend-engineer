const http=require("http");
const server=http.createServer((req,res)=>{
    if(req.method=="GET" && req.url=="/"){
        res.statusCode=200;
        res.end("hello from url /");
    }
    if(req.method=="GET" && req.url=="/users"){
        res.statusCode=400;
        res.end("Hello from /users");
    }
});
server.listen(3000,()=>{
    console.log("Server is running on port number 3000");
});