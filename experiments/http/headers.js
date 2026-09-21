const http=require("http");
const server=http.createServer((req,res)=>{
    console.log(req.headers);
    res.end("headers received...");
});
server.listen(3000,()=>{
    console.log("server is running on portnumber 3000");
});

//curl http://localhost:3000