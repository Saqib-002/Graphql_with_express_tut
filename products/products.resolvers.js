const productModel=require('./products.model');

module.exports={
    Query:{
        products:()=>{
            console.log("Getting the products...");
            return productModel.getAllProducts();
        },
        productsByPrice:(_,args)=>{
            return productModel.getProductsByPrice(args.min,args.max);
        },
        productByID:(_,args)=>{
            return productModel.getProductByID(args.id);
        }
    },
    Mutation:{
        addNewProduct:(_,args)=>{
            return productModel.addNewProduct(args.id,args.description,args.price)
        }
    }
}