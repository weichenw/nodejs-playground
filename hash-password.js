
const bcrypt = require('bcryptjs')

const myFunction = async () => {
    const passwd = 'abc123'
    //recommended salt round is 10
    const hashPasswd = await bcrypt.hash(passwd, 10)
    console.log(passwd)
    console.log(hashPasswd)

    const isMatch = await bcrypt.compare('abc123', hashPasswd)
    console.log(isMatch)
}

myFunction()

//NOTE:why use bcrypjs
//https://npmcompare.com/compare/bcrypt,bcrypt-nodejs,bcryptjs