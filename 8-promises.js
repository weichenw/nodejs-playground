const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('Success')
        reject('Its no worky')
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log('123', result)
}).catch((error) => {
    console.log('Error', error)
}) 