# For querying:
{
  productsByPrice(min: 10, max: 50) {
    description
    price
  }
  productByID (id:"bluejean"){
    description
  }
  orders {
    subtotal
    items {
      quantity
      product {
        id
        price
        reviews {
          rating
          comment
        }
      }
    }
  }
}
# for mutation

mutation{
  addNewProduct(id:"orangejacket",description:"Orange Jacket",price:70.55){
    id
    reviews{
      rating
      comment
    }
  }
  addNewProductReview(id:"redshoe",rating:5,comment:"Great codind shoes!"){
    rating
    comment
  }
} 