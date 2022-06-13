const expect = require('chai').expect



function calculator(num1, num2, calc) {
    if (calc === "+") {
        return num1 + num2
    }
    else if (calc === "-") {
        return num1 - num2
    }
    else if (calc === "*") {
        return num1 * num2
    }
    else if (calc === "/") {
        return num1 / num2
    }
}

it("Failing Test", function() {
    throw new Error("This is my failing test")
})

it("Call Calculator", function(){
    calculator()
})


it("Add two numbers", function() {
    expect(calculator(4,5, "+")).to.be.equal(9)
})


it("Substract two numbers", function() {
    expect(calculator(5, 2, "-")).to.be.equal(3)
})


it("Multiply two numbers", function() {
    expect(calculator(2, 2, "*")).to.equal(4)
})



it("Divide two numbers", function() {
    expect(calculator(10, 2, "/")).to.be.equal(5)
})