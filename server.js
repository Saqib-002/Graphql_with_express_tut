const express=require('express');
const path=require('path')
const {loadFilesSync}=require('@graphql-tools/load-files')
const {graphqlHTTP}=require('express-graphql')
const {makeExecutableSchema}=require('@graphql-tools/schema')

const typesArray = loadFilesSync('**/*', {
    extensions: ['graphql']
  });
const schema=makeExecutableSchema({
    typeDefs:typesArray,
    resolvers:{
        Query:{
            products:async(parent)=>{
                console.log("Getting the products...");
                return await Promise.resolve(parent.products)
            },
            orders:(parent)=>{
                console.log("Getting the orders...");
                return parent.orders
            }
        }
    }
})

const root={
    products:require("./products/products.model"),
    orders:require("./orders/orders.model")
}

const app=express();

app.use("/graphql",graphqlHTTP({
    schema:schema,
    rootValue:root,
    graphiql:true
}))

app.listen(3000,()=>{
    console.log('listening on port 3000');
})