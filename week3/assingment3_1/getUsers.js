const User = require("./user")


const user1 = new User(2, 7,"Bob Smith", 65)
const user2 = new User(3, 4,"Martin Larence", 55)

console.log("***First User***")
console.log(user1.addNumbers())
console.log(user1.subtractNumbers())
console.log(user1.multipleNumbers())
console.log(user1.divideNumbers())
console.log(user1.helloUser())
console.log(user1.turnNumbersToString(5, 6))
console.log(`\n`)


console.log("***Second User***")
console.log(user2.addNumbers())
console.log(user2.subtractNumbers())
console.log(user2.multipleNumbers())
console.log(user2.divideNumbers())
console.log(user1.turnNumbersToString(9, 13))
console.log(user2.helloUser())