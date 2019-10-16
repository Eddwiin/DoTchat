const UserMutation = require('./../graphql/user/user.mutation');

exports.createUser = (req, res, next) => {
    UserMutation.createUser(req, res, next);
}