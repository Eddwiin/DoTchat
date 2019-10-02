
const UserService = require('./../services/user.service');

exports.getUsers = async (req, res, next) => {
    const users = await UserService.getUsers(req);
    return res.status(200).json({ users: users})
}