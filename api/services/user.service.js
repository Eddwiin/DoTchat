const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Mutation {
        createUser (lastName: String, firstName: String, email: String, password: String): Boolean
    }
`)

