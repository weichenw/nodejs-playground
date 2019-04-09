// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //resolve('Success')
//         reject('Its no worky')
//     }, 2000)
// })

// doWorkPromise.then((result) => {
//     console.log('123', result)
// }).catch((error) => {
//     console.log('Error', error)
// }) 

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

//Nested -> No good
// add(1, 2).then((sum) => {
//     console.log(sum)

//     add(sum, 1).then((sum2) => {
//         console.log(sum2)
//     }).catch(() => {
//         console.log(e)
//     })

// }).catch((e) => {
//     console.log(e)
// })

add(1, 2).then((sum1) => {
    console.log(sum1)
    return add(sum1, 1)
}).then((sum2) => {
    console.log(sum2)
    return add(sum2, 2)
}).then((sum3) => {
    console.log(sum3)
}).catch((e) => {
    console.log(e)
})