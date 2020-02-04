const express = require('express');

const graphqlHTTP = require('express-graphql');
//const { buildSchema } = require('graphql');

var app = express();

const schema = require('./app/schema');

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));


/*
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = { hello: () => 'Hello world!' };


app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
*/

app.listen(3000, () => {
    console.log('App listening on port 3000');
});