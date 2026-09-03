function getData(time){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("completed processing....")
        },time);
    });
}
async function request(name,time){
    console.log("processing", name);
    const data=await getData(time);
    console.log("data retreived....");
    console.log("completed processing",name);
}
console.log("A");
request("request1",5000);
request("request2",1000);
console.log("B");