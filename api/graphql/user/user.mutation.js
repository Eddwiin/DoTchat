const graphqlHTTP = require('express-graphql');
const  { buildSchema } = require('graphql');
const mongoConnection = require('./../../core/mongo');

const schema = buildSchema(`
    type Mutation {
        createUser(lastName: String, firstName: String, email: String, password: String): Boolean
    }
`)

exports.createUser = (req, res, nex) => {
    console.log(req);
    // mongoConnection.then((db) => {
    //     console.log(db);
    // })
};