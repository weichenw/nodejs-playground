const { calculateTip, fahrenheitToCelsius, celsiusToFahrenheit, add } = require('../math')

test('Should calculate total with tip', () => {
    const total = calculateTip(10, 0.3)
    expect(total).toBe(13)
})

test('Should calculate total when default tip', () => {
    const total = calculateTip(10)
    expect(total).toBe(12.5)
})

test('Should convert F to C', () => {
    const temp = fahrenheitToCelsius(32)
    expect(temp).toBe(0)
})

test('Should convert C to F', () => {
    const temp = celsiusToFahrenheit(0)
    expect(temp).toBe(32)
})

// test('Async test demo', (done) => {
//     setTimeout(() => {
//         expect(1).toBe(2)
//         done()
//     }, 2000)
// })

test('Promise test demo', (done) => {
    add(2, 3).then((sum) => {
        console.log(sum)
        expect(sum).toBe(5)
        done()
    })
})

test('Async await demo test', async () => {
    const sum = await add(2, 3)
    expect(sum).toBe(5)
})
