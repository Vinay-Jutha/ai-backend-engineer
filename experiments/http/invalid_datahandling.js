const http=require("http");
const { json } = require("stream/consumers");
const server=http.createServer((req,res)=>{
    if(req.method=="POST" && req.url=='/users'){
        let body="";
        req.on("data",(chunk)=>{ body+=chunk.toString();});
        req.on("end",()=>{
            try{
                console.log("data recieved......");
                const userdata=JSON.parse(body);
                console.log(userdata);

                res.statusCode=200;
                res.setHeader("Content-Type","application/json");
                res.end(JSON.stringify({ data:"recieved"}));
            }
            catch(error){
                res.statusCode=400;
                res.setHeader("Content-Type","application/json");
                res.end(JSON.stringify({response:"Invalid input"}));
            }
        });  
    }
});
server.listen(3000,()=>{
    console.log("server is running on port number 3000");
});

// curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d "{\"name\":\"Vinay\",}"
//you will get invalid input as response.....
// curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d "{\"name\":\"Vinay\"}"
//valid command..