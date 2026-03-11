// **1.** Write a fetch request that gets data from `https://jsonplaceholder.typicode.com/users` and logs the data.

// fetch(`https://jsonplaceholder.typicode.com/users`)
// .then((res) => res.json().then(response => console.log(response)))
// .catch((err) => console.log(err))


let url = `https://jsonplaceholder.typicode.com/users`

let getUsers = async () => {
    try {
        const res = await fetch(url)
        const response = await res.json()
        // console.log("Finished fetching");
        
        // console.log("Total Number of users is : "+response.length);
        // console.log("Total Number of users is : "+responses.length);
    }
    catch(err){
        console.log("Error => "+err);

    }
    finally{
        console.log("End of the code.");
    }
}
getUsers()


// ## Promises (.then / .catch)
// **7.** Create a Promise that resolves with `"Hello"` and print it using `.then()`.

// let prom =  new Promise((resolve, reject) => {
//     resolve("hello")
// })

// prom.then((res) => console.log(res))
// .catch((rej) => console.log("Error = "+rej))

// **8.** Create a Promise that rejects with `"Something went wrong"` and handle it using `.catch()`.

// let prom2 = new Promise((res,rej) => {
//     rej("Something went Wrong")
// })

// prom2.then(res => console.log(`Successfull ${res}`))
// .catch(err => console.log(`Error=> ${err}`))

// **9.** Write a Promise chain with **two `.then()` blocks**.

// let prom = new Promise((res,rej) => {
//     res('I am from promise')
// }).then(res => {
//     return res+" from first then"
// }).then(res => {
//     console.log(res);

// })

// **10.** Create a Promise that resolves after **2 seconds** using `setTimeout`.
// let prom = new Promise((res, rej) => {
//     res("Promise Successfull ..")
// })

// setTimeout(() => {
//     prom.then(res => console.log(res))
// }, 2000)

// prom.then(res => console.log("Step-1"))
//     .then(() => console.log("Step-2"))


// async function waitOneSecond() {
//   console.log("Waiting...");

//   await new Promise(resolve => setTimeout(resolve,1000))

//   console.log("Done! 1 second has passed.");
// }

// waitOneSecond();