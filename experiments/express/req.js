const http=require("http");
const server=http.createServer((req,res)=>{
    console.log(req.method);
    console.log(req.url);
    console.log(req.headers);

    res.end("Request rececived....");
});
server.listen(3000 ,()=>{
    console.log("server is running on portnumber 3000");
});
//observe req.url in both queries...
// curl -i http://localhost:3000/users
// curl "http://localhost:3000/users?page=2&limit=10"