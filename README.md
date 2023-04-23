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