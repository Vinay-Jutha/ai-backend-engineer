const http=require("http");
const server=http.createServer((req,res)=>{
    console.log("All headers.....");
    console.log(req.headers);

    console.log("Content-type in header...")
    console.log(req.headers["content-type"]);

    console.log("Authorization token....")
    console.log(req.headers["authorization"]);

    res.end("done");
});
server.listen(3000,()=>{
    console.log("Server is running on port number 3000");
});

//curl http://localhost:3000 -H "Authorization: Bearer abc123"