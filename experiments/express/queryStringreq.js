const http=require("http");
const server=http.createServer((req,res)=>{
    console.log(req.url);
    res.end("Request rececived....");
});
server.listen(3000 ,()=>{
    console.log("server is running on portnumber 3000");
});
// curl "http://localhost:3000/users?page=2&limit=10"