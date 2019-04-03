//NOTE:setting default value for function parameter
const greeter = (name = 'anonymous', age) => {
    console.log('Hello ' + name)
}

greeter('Andrwe')

greeter()


//NOTE: when destructure by defaulting empty object and property with blank object or value
const transaction = (type, { label, stock = 0 } = {}) => {
    console.log(type, label, stock)
}

// run function only with one parameter
transaction('order')