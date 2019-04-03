const fs = require('fs')

// const book = {
//     title: 'This is new book',
//     author: 'WC the great'
// }

// const bookJson = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJson)

// let dataBuffer = fs.readFileSync('./1-json.json')
// let dataJSON = dataBuffer.toString()
// let data = JSON.parse(dataJSON)
// console.log(data.title)



let jsonFile = fs.readFileSync('./1-json.json')
let jsonData = JSON.parse(jsonFile.toString())
jsonData.name = 'Wei'
jsonData.age = '39'

const jsonString = JSON.stringify(jsonData)
fs.writeFileSync('./1-json.json', jsonString)