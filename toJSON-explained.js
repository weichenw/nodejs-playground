const pet = {
    name: 'Hal'
}

console.log(pet)
pet.toJSON = function () {
    // console.log(this)
    // return this
    return { name: 'test' }

}
console.log(pet)
console.log(JSON.stringify(pet))