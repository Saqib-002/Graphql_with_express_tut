const products=[
    {
        id:"redshoe",
        description:"Red Show",
        price:42.1
    },
    {
        id:"bluejean",
        description:"Blue Jeans",
        price:55.55
    }
]
function getAllProducts(){
    return products;
}

module.exports={
    getAllProducts
}