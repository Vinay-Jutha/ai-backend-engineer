const http=require("http");
const server=http.createServer((req,res)=>{
    res.statusCode=201;
    res.setHeader("Content-Type","text/plain");
    res.end("users created");
});
server.listen(3000,()=>{
    console.log("Server is running on portnumber 3000");
});
//curl -i http://localhost:3000/users