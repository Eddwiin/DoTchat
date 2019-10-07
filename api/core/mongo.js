
const MongoClient = require('mongodb').MongoClient;
let db = undefined;

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

module.exports = new Promise((resolve, reject) => {
    MongoClient.connect(process.env.DTB_URL,  { useNewUrlParser: true,  useUnifiedTopology: true })
        .then((dbConnection) => resolve(dbConnection.db('dotchat')))
        .catch(reject)
})


