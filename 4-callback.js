// setTimeout(() => {
//   console.log('wait')
// }, 2000)

// const names = ['Tom', ' Dick', 'Harry']
// const shortNames = names.filter(name => {
//   return name.length <= 4
// })

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0
//     }

//     callback(data)
//   }, 2000)
// }

// geocode('Melbourne', (returnData) => {
//   console.log(returnData)
// })


// const add = (a, b, callback) => {
//   setTimeout(() => {
//     callback(a + b)
//   }, 2000)
// }


// add(1, 4, (sum) => {
//   console.log(sum) //should print :5
// })

const doWorkCallback = (callback) => {
  setTimeout(() => {
    //callback('This is error', undefined)
    callback(undefined, 'Successful')
  }, 2000)
}

doWorkCallback((error, result) => {
  if (error) {
    return console.log(error)
  }

  console.log(result)
}) 