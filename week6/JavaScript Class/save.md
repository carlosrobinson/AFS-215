
describe("Display the array", () =>{
    it("Should call the array", ()=>{
        expect(item.showAllItems())

    })
})



describe("Find items in an array .", () => {
    it("Should remove specific items from the array", () => {
        expect(item.removeItem(5)).to.deep.equal(item.showAllItems())
    })})



describe("Search the array for a specific item", () => {
    it("If the item exists, return true(boolean). If not, provide an error message.", () => {
        expect(item.searchForItem()).to.equal(true)       
    })
})