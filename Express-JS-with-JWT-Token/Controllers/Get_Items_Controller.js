const items = require("../Models/Items")
module.exports={
    getAllItems:(req,res)=>{
        console.log(items)
        res.json(items)

    },
    getRandomItems:(req,res)=>{
        const numberOfItems = 3
        const random_items = getRandomNumberOfItems(items,numberOfItems)
        console.log(random_items)
        res.json(random_items)
    }
}

function getRandomNumberOfItems(array,numberOfItems){
    const shuffled_array = array.sort(()=>0.5-Math.random())
    return shuffled_array.slice(0,numberOfItems)
}
