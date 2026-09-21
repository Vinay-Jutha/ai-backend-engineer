const express=require("express");
const app=express();
app.get("/users/:userId/orders/:orderId",(req,res)=>{
    console.log(req.params.userId);
    console.log(req.params.orderId);
    res.send("response send");
});
app.listen(3000,()=>{
    console.log("Server is listening on portnumber 3000");
});
//curl http://localhost:3000/users/123/orders/456