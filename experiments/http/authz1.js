const http=require("http");
const server=http.createServer((req,res)=>{
    if(req.method=='DELETE' && req.url=="/delete"){
        const users=[
            { username:"Vinay",role:"employee"},
        ]
        if(users[0].role=="Admin"){ 
            res.statusCode=200;
            res.end("you have the access to delete...");
        }
        else{ 
            res.statusCode=403; 
            res.end("you are not authorized"); 
        }
    }
});
server.listen(3000,()=>{
    console.log("SErver is running on portnumber 3000");
});