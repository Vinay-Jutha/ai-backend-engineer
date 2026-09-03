// const http=require("http");
// const server=http.createServer((req,res)=>{
//     if(req.url=="/slow"){
//         setTimeout(()=>{
//             res.end("slow request completed.....");
//         },8000);
//     }
//     if(req.url=="/fast"){
//         res.end("fast request completed.....");
//     }
// });
// server.listen(3000, ()=>{
//     console.log("Server is running on port number 3000");
// });

const http=require("http");
const server=http.createServer((req,res)=>{
    if(req.url=="/slow"){
        const start=Date.now();
        while(Date.now()- start < 8000){  }
        res.end("slow executes....");
    }
    if(req.url=="/fast"){
        res.end("fast request completed.....");
    }
});
server.listen(3000, ()=>{
    console.log("Server is running on port number 3000");
});
