const expect = require("chai").expect;


const DataType = require('../app/DataTypes')


let count = 0

before(() =>{
    console.log("-------Testing Has started--------")
})


beforeEach(function () {
    item = new   DataType()
    item.addItem(5)
    item.addItem("s")
    item.addItem(1)
    item.addItem("Carlos")
})


afterEach(() => {
    count++
    console.log(`------Test ${count} completed-----`)
})


after(() =>{
    console.log("-------All Testing Complete--------")
})




describe("An Array ", () => {
    describe("Add any data type to an array", () => {
        it("Should add any data type", () => {
  
            expect(item.addItem(2.5)).to.deep.equal([5, "s" , 1, "Carlos", 2.5])
        })
    })
})

describe("Display the array", () =>{
    it("Should call the array", ()=>{
        expect(item.getItems())

    })
})

describe("Search the array for a specific item", () => {
    it("If the item exists, return true(boolean). If not, provide an error message.", () => {
        expect(item.searchForItem("k")).to.equal(true)       
    })
})


describe("Find items in an array .", () => {
    it("Should remove specific items from the array", () => {
        expect(item.removeItem("s")).to.deep.equal(item.getItems())
    })})