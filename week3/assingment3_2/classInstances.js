module.exports = class Instances{
    // constructor(num) {
    //     this.num=num
    // }

    multiplesOfThree = (num) => {
        if (num % 3 === 0) {
            return "Good Morning"
        }
        else {
            return `${num} IS NOT A MULTIPLE OF THREE`
        }

    }

    multiplesOfSeven = (num) => {
        if (num % 7 === 0) {
            return "Good Afternoon"
        }
        else{
            return `${num} IS NOT A MULTIPLE OF SEVEN`
        }
    }

    multiplesOfThreeAndSeven = (num) => {
        if (num % 3 === 0 &  num %  7 === 0) {
            return "Good Evening"
        }
        else{
            return `${num} IS NOT A MULTIPLE OF THREE AND SEVEN`
        }
    }
    notMultipleOfThreeAndSeven = (num) => {
        if (num % 3 !== 0 &  num %  7 !== 0) {
            return String(num)
        }
        else{
            return `${num} IS A MULTIPLE OF THREE AND SEVEN`
        }
    }



    nonNumber = (arg) => {
        if (isNaN(arg)) {
            return `ERROR !!!! ${arg} is not a number`
        }
        else{
            return arg
        }
    }

}
    


    