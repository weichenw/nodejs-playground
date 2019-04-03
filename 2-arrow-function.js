// const square = function (x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

//this arrow function only for simple function
//const square = (x) => x * x

//console.log(square(3))

//arrow function does not work as below. Arrow function does not bind 'this' for a method of a property
// const event = {
//     name: 'Birthday Party',
//     printGuestList: () => {
//         console.log('Guest list for ' + this.name)
//     }
// }

//instead this works. binds 'this' in the function that its created. not methods of a property
const event = {
    name: 'Birthday Party',
    guestList: ['tom', 'dick', 'harry'],
    printGuestList() {
        console.log('Guest list for ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()