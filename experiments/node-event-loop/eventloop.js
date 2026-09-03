console.log("A");
setTimeout(()=>{
    console.log("Timer...");
});
function calculate(){
    console.log("Calculation starts....");
    for(let i=0;i<1000000000000;i++){

    }
    console.log("calculation completed.....");
}
calculate();
console.log("B");