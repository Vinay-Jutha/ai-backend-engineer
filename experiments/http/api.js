const http=require("http");
const server=http.createServer((req,res)=>{
    if(req.method=="GET" && req.url=="/users"){
        const users=[
            { id:1,name:"vinay"},
            { id:2,name:"uday"},
            { id:3,name:"udwin"}
        ];
        res.statusCode=200;
        res.setHeader("Content-Type","application/json");
        res.end(JSON.stringify(users));
    }
    else{
        res.statusCode=404;
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>404 Resource not found</h1>");
    }
});
server.listen(3000,()=>{
    console.log("server is running on port number 3000");
});