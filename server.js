const express=require('express');
const path=require('path')
const {loadFilesSync}=require('@graphql-tools/load-files')
const {ApolloServer}=require('apollo-server-express')
const {makeExecutableSchema}=require('@graphql-tools/schema');
const { start } = require('repl');

const typesArray = loadFilesSync('**/*', {
    extensions: ['graphql']
  });
const resolversArray = loadFilesSync('**/*.resolvers.js');

async function startApolloServer(){
    const app=express();
    const schema=makeExecutableSchema({
        typeDefs:typesArray,
        resolvers:resolversArray
    })
    const server=new ApolloServer({
        schema
    });
    await server.start();
    server.applyMiddleware({app,path:'/graphql'})
    app.listen(3000,()=>{
        console.log('listening on port 3000');
    })
}

startApolloServer();