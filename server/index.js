const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./typedefs');
const resolvers = require('./resolvers');
const db = require('./db')
const config = require('./config')
const express = require('express')
const dotenv = require('dotenv');
const JarvisAPI = require('./datasources/JarvisAPI');
const { context } = require('./libs/auth');

dotenv.config();


/*##########################################################
 * to install all the needed dependencies,in cmd run npm install
 ###########################################################*/

process.env.PWD = process.cwd()

db.connect()

/**
 * SETTING UP APOLLO SERVER
 */
const server = new ApolloServer({
  cors: true,
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      jarvisAPI: new JarvisAPI()
    }
  },
  context: context,

  playground: process.env.SERVER_PLAYGROUND,
});

const app = express()


server.applyMiddleware({
  app,
})


app.listen(config.port, () => console.log(`🚀  Server ready at ${config.port}`))
