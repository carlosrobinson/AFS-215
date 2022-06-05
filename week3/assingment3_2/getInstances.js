const Instances = require("./classInstances")


message1 = new Instances()
message2 = new Instances()
message3 = new Instances()

console.log("** First Instance**")
console.log(`multiple of three: ${message1.multiplesOfThree(3)}`)
console.log(`not a multiple of three: ${message2.multiplesOfThree(13)}`)
console.log(`multiple of Seven: ${message1.multiplesOfSeven(14)}`)
console.log(`multiple of Seven: ${message1.multiplesOfSeven(32)}`)
console.log(`multiple of Three and Seven: ${message1.multiplesOfThreeAndSeven(21)}`)
console.log(`not a multiple of Three and Seven: ${message1.multiplesOfThreeAndSeven(32)}`)
console.log(`Fourth console log: ${message1.notMultipleOfThreeAndSeven(((2)))}`)
console.log(message1.nonNumber(1000))
console.log(message1.nonNumber(52))
console.log(`\n`)



console.log("** Second Instance**")
console.log(`multiple of three: ${message2.multiplesOfThree(6)}`)
console.log(`not a multiple of three: ${message2.multiplesOfThree(14)}`)
console.log(`multiple of Seven: ${message2.multiplesOfSeven(35)}`)
console.log(`not a multiple of Seven: ${message2.multiplesOfSeven(9)}`)
console.log(`multiple of Three and Seven: ${message2.multiplesOfThreeAndSeven(42)}`)
console.log(`multiple of Three and Seven: ${message2.multiplesOfThreeAndSeven(20)}`)
console.log(`Fourth console log: ${message2.notMultipleOfThreeAndSeven(((11)))}`)
console.log(message2.nonNumber("m"))
console.log(message2.nonNumber(100))