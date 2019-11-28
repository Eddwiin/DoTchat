
const MongoClient = require('mongodb').MongoClient;
const env = require('./../core/loader').getEnv();

module.exports = new Promise((resolve, reject) => {
    MongoClient.connect(env.database.url,  { useNewUrlParser: true,  useUnifiedTopology: true })
        .then((dbConnection) => resolve({ dbConnection: dbConnection, dbo: dbConnection.db('dotchat') }))
        .catch(reject)
})


