let b = 2;
console.log(b + 2)

// const a = new Promise()

// const myFetch = async () => {
//     const response = await fetch('https://api.github.com/users/wwarodom')
//     console.log(await response.json())
// };


// async function myFetch1() {
//     const response = await fetch('https://api.github.com/users/wwarodom')
//     console.log(await response.json())
// }
// myFetch1()

// fetch('https://api.github.com/users/wwarodom')
//     .then(
//         (response) => {
//             console.log("")
//             response.json().then((data) => {
//                 console.log("Data: ", data)
//             })
//         }
//     )

let x = 2
const a = new Promise((resolve, rejectxx) => {

    if(x === 1)
        resolve("Done!!")
    else
        rejectxx("Fail")
})

a.then(console.log).catch(console.error)


// const foo = async () => {
//     try {
//         const response = await a
//         console.log(response)
//     }
//     catch(error_my_love) {
//         console.log(error_my_love)
//     }
// }

// foo()

// const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))

// const useWait = async (second) => {
//     await wait(second)
//     console.log("Finish....")
// }

// useWait(5000)
// wait(2000).then(() => console.log("Finish...."))


// function myFunction() {
//     console.log("My function")
// }

// const myFunction = () => console.log("My function")

setTimeout(() => console.log("My function"), 1000)