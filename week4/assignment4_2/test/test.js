const assert = require('chai').assert


function condition(num) {
    if(isNaN(num)) {
        return `ERROR !!!! ${num} is not a number`
    }
    else if(num % 3 == 0 && num % 7 == 0 ) {
        return "Good Evening"
    }
    else if(num === 3) {
        return "Good Morning"
    }
    else if(num == 7) {
        return "Good Afternoon"
    }
    else if(num % 3 ==0) {
        return "Good Morning"
    }
    else if(num % 7 == 0) {
        return "Good Afternoon"
    }
    else if(isNaN(num)) {
        return `ERROR !!!! ${num} is not a number`
 }
    else {
        return String(num)
    }
}




it("Call Condition", function() {
    condition()
})



it("Returns the string '1'", function() {
    assert(condition(1)  == "1")
})



it("Returns the string '2'", function() {
    assert(condition(2 == "2"))
})



it("Returns 'Good Morning' when passed a 3", function() {
    assert(condition(3) == "Good Morning")
})



it("Returns 'Good Afternoon' when passed a 7", function() {
    assert(condition(7)  == "Good Afternoon")
})



it("Returns 'Good Morning' when passed a 3 or a multiple thereof", function() {
    assert(condition(6)  == "Good Morning")
})



it("Returns 'Good Afternoon' when passed a 7 or a multiple thereof", function() {
    assert(condition(14)  == "Good Afternoon")   
})



it("Returns 'Good Evening' when passed a multiple of 3 or 7", function() {
    assert(condition(21) == `Good Evening`)
})



it("If any data type other than a number is passed return an error message", function() {
    assert(condition(String("t")))
})