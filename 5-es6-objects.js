// Object property shorthand

const name = 'Tom'
const userAge = '30'

const user = {
    name, //<-- property name has to be the same as the variable name
    age: userAge,
    location: 'New York'
}

console.log(user)


// Object destructuring
const product = {
    label: 'Red Book',
    price: 3,
    stock: 200,
    salePrice: undefined
}

// //too long
// //const label = product.label
// //const stock = product.stock
// //here deconstruct the object to variable
// const { label: productLabel, stock, rating = 5 } = product

// //console.log(label) <--label has been renamed to productLabel
// console.log(productLabel)
// console.log(stock)
// // can include property which is undefined in the object
// //default set to 5. default only be used when there is no value
// console.log(rating)

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product)
