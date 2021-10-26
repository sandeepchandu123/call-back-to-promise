// const isLegal=new Promise((resolve,reject)=>{
//     let age=20;
//     if(age>=18){
//         resolve("Major");

//     }else{
//         reject("Minor");
//     }
// });
// isLegal
// .then((msg)=>console.log(msg + " ! congratulationals"))
// .catch((errMsg)=>console.log(errMsg));

// // try{
// //     const data=JSON.parse('{"x":4,"name" :"sandeep"}');
// //     console.log(data,'{"x":4,"name": "sandeep"}');

// // }catch(err){
// //     console.log(err,"try again");
// // }



// // try{
// // console.log(x1);
// // }catch{
// //     console.log("may be some mistake in declaration");
// // }
// console.log([1,2,3]
//     .map((x)=>x*2)
//     .map((y)=>y+4)
// );

// isLegal
// .then((msg)=> msg + " ! congratulations")
// .then( (msg1)=> console.log(msg1 + " Nice"))
// .then( (msg2)=> console.log(msg2 + " good"))//// gives undefinedgood

// .catch((errMsg)=>console.log(errMsg));



// function x(){
//     "Awesome"
// }
// var y=x();/// comes undefined
// console.log(y);


// function x(){
//     console.log("Awesome");/// Awesome
// }
// var y=x();
// console.log(y);/// comes undefined

// function x(){
//     return "Awesome";
// }
// var y=x();
// console.log("y is",y);//// y is Awesome



// function x(){
//       return console.log("Awesome");/// Awesome
//      }
//      var y=x();
//      console.log(y); /// undefined
    

const msg=(count)=>
new Promise((resolve,reject)=>{
    if (count>=1){
        setTimeout(()=>{
        document.querySelector(".countdown").innerText=count;
        resolve(count);
        },1000);
    }else{
        setTimeout(()=>{
            document.querySelector(".countdown").innerText="Happy Independence Day";
            reject("completed");
    },1000);
}
});

msg(9)
    .then((ct)=>msg(--ct))
    .then((ct)=>msg(--ct))
    .then((ct)=>msg(--ct))
    .then((ct)=>msg(--ct))
    .then((ct)=>msg(--ct))
    .then((ct)=>msg(--ct))
    .then((ct)=>msg(--ct))
    .then((ct)=>msg(--ct))
    .then((ct)=>msg(--ct))
    .catch((err)=>console.log(err));