const fs=require("fs");
console.log("A");
fs.readFile("data.txt","utf8",()=>{
    console.log("file read successfully");
    Promise.resolve().then(()=>{
        console.log("promise resolved....");
    });
    setTimeout(()=>{ 
        console.log("timer function executes....")}
    );
    setImmediate(()=>{ 
        console.log("immediate function executes....")}
    );
});
console.log("B");
