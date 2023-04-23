const express=require('express');
const path=require('path')
const {loadFilesSync}=require('@graphql-tools/load-files')
const {graphqlHTTP}=require('express-graphql')
const {makeExecutableSchema}=require('@graphql-tools/schema')

const typesArray = loadFilesSync('**/*', {
    extensions: ['graphql'],
  });
const schema=makeExecutableSchema({
    typeDefs:typesArray
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