function hellosayer(times, name) {
    let count = 0
    let loopid = setInterval(() => {
        count++
        console.log("hello " + name)
        if (count == times) {
            clearInterval(loopid)
        }


    }, 1000)

}

// hellosayer(3, "prateek")
// hellosayer(2, "arnav")
//so basically when prateek prints it waits for 1
// sec and in that time other call runs and print arnav
//these two calls are not running parallely



//concurency using promises
// console.log("***********concurency using promises*************")
function hellosayer2(times, name) {
    return new Promise((resolve, reject) => {
        let count = 0
        let loopid = setInterval(() => {
            count++
            console.log("hello " + name)
            if (count == times) {
                clearInterval(loopid)
                resolve() // resolve function call function inside .then
            }


        }, 1000)
    })


}

//concurently
// hellosayer2(2, "arnav")
// .then(hellosayer2(2, "prateek"))
// .then(hellosayer2(2, "varun"))

//sequentially
// hellosayer2(2, "arnav")
// .then(() => hellosayer2(2, "prateek"))
// .then(() => hellosayer2(2, "varun"))


// async await

//this function executes asynchronously 
//we can use await only under async function
// async function task() {
// await hellosayer2(3, "arnav")   //we can await promise objects
// await hellosayer2(3, "prateek")
// await hellosayer2(3, "varun")
// }

// task()
// hellosayer2(3, "aman") //runs parallely with task()


//batch task promise.all 

async function task() {

    //both batch sequentially

    await Promise.all([
        hellosayer2(3, "arnav"),
        hellosayer2(3, "prateek"),       //first this batch concurrently
        hellosayer2(3, "varun")
    ])
    console.log(" ******** batch1 ended *************")
    await Promise.all([
        hellosayer2(3, "aman"),
        hellosayer2(3, "tarun"),          //then this batch concurrently
        hellosayer2(3, "shivam")
    ])


}

task()