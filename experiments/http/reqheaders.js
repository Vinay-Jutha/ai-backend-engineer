const http=require("http");
const server=http.createServer((req,res)=>{
    if(req.method=="POST" && req.url=='/users'){
        console.log("Request Received......");
        let body="";
        req.on("data",(chunk)=>{ body+=chunk.toString(); });
        req.on("end",()=>{
            try{
                const userdata=JSON.parse(body);
                if(req.headers["content-type"]=="application/json"){
                    console.log("Valid format...");
                    res.statusCode=200;
                    res.setHeader("Content-Type","application/json");
                    res.end(JSON.stringify({response:"valid format"}));
                }
                else{
                    console.log("Invalid Json format...");
                    res.statusCode=400;
                    res.setHeader("Content-Type","application/json");
                    res.end(JSON.stringify({ response:"Invalid json format"}))
                }
            }
            catch(error){
                console.log("Not a Json");
                res.statusCode=400;
                res.setHeader("Content-Type","application/json");
                res.end(JSON.stringify({response:"Not a json"}));
            }  
        });
    }

});
server.listen(3000,()=>{
  console.log("server is running on port number 3000");
});
// curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d "{\"name\":\"Vinay\"}"
//validformat of json....
// curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d "{\"name\":\"Vinay\",}"
//invalid json + headers....