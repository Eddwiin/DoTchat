
exports.getUsers = async (query) => {
    try {
        return { id: 1, lastName: 'Test', firstName: 'Eddwiin'};
    } catch(e) {
        throw Error('Error to find users')
    }
}