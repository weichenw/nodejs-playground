const https = require('https')

const url = 'https://api.darksky.net/forecast/1e9ffc5159ebea450d732f94e1919b4a/37.8267,-122.4233'

//http response is streaming hence has to process in chunks
const request = https.request(url, (response) => {

    let data = ''
    //process buffer in chunks
    response.on('data', (chunk) => {
        data = data + chunk.toString() //convert buffer to string
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

//listener for error
request.on('error', (error) => {
    console.log('Error occurs ', error)
})

request.end()