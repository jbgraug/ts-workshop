import assert from 'assert'
import { Db, MongoClient } from 'mongodb'
import config from '../../config.json'

// Use connect method to connect to the server
const client = MongoClient.connect(config.db.connection, { useNewUrlParser: true /** loggerLevel: 'debug' */ })
const db: Promise<Db> = client
    .then((dbClient) => {
        assert(config.db.name != null)
        const db2 = dbClient.db(config.db.name)
        return db2
    })

export {
    client,
    db,
}
