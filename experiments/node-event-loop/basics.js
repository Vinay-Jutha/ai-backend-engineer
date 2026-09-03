// console.log("A executes first...");
// setTimeout(()=>{
//     console.log("⏱️⏱️⏱️ Timer completed....");
//     console.log("B executes....");
// },5000);
// setTimeout(()=>{
//     console.log("⏱️⏱️⏱️ timer completed....")
//     console.log("C executes.....");
// },1000);
// console.log("E executes....");
// console.log("F executes....");


// console.log("Start");
// setTimeout(()=>{
//     console.log("⏱️⏱️⏱️⏱️⏱️⏱️Timer...");
// });
// for(let i=0;i<5000000000;i++){ }
// console.log("End");


// console.log("A executes.....");
// setTimeout(()=>{
//     console.log("⏱️⏱️⏱️⏱️timer function executes....");
// });
// Promise.resolve().then(()=>{
//     console.log("promise function execution....");
// });
// console.log("D executes....");


// console.log("A executes.....");
// setTimeout(()=>{
//     console.log("timer1 function executes.....");
// });
// Promise.resolve().then(()=>{
//     console.log("Promise1 executes....");
// });
// Promise.resolve().then(()=>{
//     console.log("promise 2 executes...");
// });
// setTimeout(()=>{
//     console.log("timer2 function executes....");
// });



// console.log("A");
// setTimeout(()=>{
//     console.log("timer callback executed...")
// });
// Promise.resolve().then(()=>{
//     console.log("promise 1");
//     Promise.resolve().then(()=>{
//         console.log("Promise 2");
//     });
// });
// console.log("B");