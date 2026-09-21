const express=require("express");
const app=express();
app.use(express.json());
app.post('/users' ,(req,res)=>{
    console.log("BODY" ,req.body);
    console.log("NAME", req.body.name);
    console.log("AGE",req.body.age);

    res.json(({
        message :"user received",
        user : req.body
    }));
});
app.listen(3000,()=>{
    console.log("Server is running on portnumber 3000");
});
//valid json format.....
//curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d "{\"name\":\"Vinay\",\"age\":25}"
//invalid json format....
//curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d "{\"name\":\"Vinay\",}"