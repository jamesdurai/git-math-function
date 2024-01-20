// setInterval(() => {                      * Methods call a function in speceified intervals
//       console.log("Hi");
//     }, 3000);


// setTimeout(() => {                      * Methods calls a function after a number of milliseconds
//       console.log("Hi");                   1 seconds = 1000 Milli seconds
//     }, 3000);

// let pro= new Promise((resolve,reject)=>{        //* A Promise contains both the producing code and calls to the consuming code
//   let set=1+1
//   if(set==3){  
//       resolve("Welecome")
//   }
//   else
//   {
//       reject("Not okk")
//   }
// }) 

// pro
// .then((result)=>{
// console.log(result)
// })

// .catch((fail)=>{
//   console.log(fail)
//  })

//  .finally(()=>{
//   console.log("It's Over")
//  })

  //  setTimeout(() => {
  //     console.log("Normal : 1");
  
  //     setTimeout(() => {
  //       console.log("Normal : 2");
  
  //       setTimeout(() => {
  //         console.log("Normal : 3");
  //       }, 4000);
  //    }, 2000);
  //   }, 3000);

// setTimeout(() => {
//   console.log("promise : 1");

//   setTimeout(() => {
//     console.log("promise : 2");

//     setTimeout(() => {
//       console.log("promise : 3");
//     }, 4000);
//  }, 2000);
// }, 3000);

function setPromise(duration) {
  return new Promise((resolve, reject) => {
   setTimeout(resolve, duration);
 });
}
setPromise(2000)
  .then(() => {
    console.log("Cool Promise : 1");
    return setPromise(5000);
  })
  .then(() => {
    console.log("Cool Promise : 2");
    return setPromise(2000);
  })
  .then(() => {
    console.log("Cool Promise : 3");
  });

//first reject value

//  Promise.all([Promise.reject("welcome"), Promise.reject("Good"), Promise.resolve("promise1")])
//    .then((msg) =>{  
//       console.log(msg); 
//     })
//   .catch((error) => {
//     console.error(error);  });

// Promise.all([Promise.resolve("Good"), Promise.resolve("Error"), Promise.reject("Good")])
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((error) => {
   // console.error(error);
 // });

// // first success value
// Promise.any([Promise.resolve("1"), Promise.resolve("Error"), Promise.resolve("3")])
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((error) => {
//    console.error(error);
//   });

// resolve or reject any first value
// Promise.race([Promise.reject("Good-1"), Promise.reject("Good-2"), Promise.resolve("Good-3")])
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// return a object
// Promise.allSettled([Promise.reject("Good-1"), Promise.resolve("Good-2"), Promise.resolve("Good-3")])
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((error) => {
//     console.log(error);
//   });



// const promise = Promise.resolve("welcome");

// promise
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("All Completed..");
//   });