module.exports = class DataType 
{
    constructor(itemIndex) {
        this.array =[]
        this.itemIndex = itemIndex
    }


    // Add any object to the array
    addItem = (item) => {
        this.array.push(item)
        return this.array
    }


    //Show all objects in array
    getItems =() =>{
        return this.array
    }


    //Remove ant object in the array
    removeItem = (item) => {
        for(let i = 0; i < this.array.length; i++) {
            this.itemIndex = this.array.indexOf(item)
            if(this.itemIndex == i) {
                this.array.splice(1, this.itemIndex)
                return this.array
            }
        }
    }


    //Search for any object in the array
    searchForItem = (item) => {
        let obj = this.array.find(o => o === item );
        if(obj === item) { 
            return true
        }
        else {
            return `ERROR ${item} is not in arrary !!!`
        }
    }
}