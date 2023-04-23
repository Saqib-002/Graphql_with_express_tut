const productModel=require('./products.model');

module.exports={
    Query:{
        products:()=>{
            console.log("Getting the products...");
            return productModel.getAllProducts();
        },
        productsByPrice:(_,args)=>{
            return productModel.getProductsByPrice(args.min,args.max);
        }
    }
}