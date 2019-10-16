const UserController = require('./../controllers/user.controller');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const userSchema = require('../models/user.model');

module.exports = (app) => {
    app.use('/graphql', cors(), graphqlHTTP({
        schema: userSchema,
        rootValue: global,
        graphiql: true
    })),
    app.post('/users', UserController.createUser);
}