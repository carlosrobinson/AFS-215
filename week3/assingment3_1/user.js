module.exports = class User{
    constructor (num1, num2, userName = "Carlos Robinson", userAge = "46") {
        this.num1=num1
        this.num2=num2
        this.userName=userName
        this.userAge=userAge
    }


    addNumbers = () =>{
        return this.num1 + this.num2
    }


    subtractNumbers = () =>{
        return this.num1 * this.num2
    }


    multipleNumbers = () =>{
        return this.num1 * this.num2
    }


    divideNumbers = () =>{
        return this.num1 / this.num2
    }

    helloUser = (argName = this.userName, argAge=this.userAge ) => {return `Hello ${argName}. So you are ${argAge}`}


    turnNumbersToString = (a, b) => {
        return String(a) + String(b)
    }

    }




