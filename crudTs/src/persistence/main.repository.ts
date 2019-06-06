import { Collection,  Db, ObjectID } from 'mongodb'
import { IUser } from '../interfaces'

export class MainRepository {
    public db: Db
    public users: Collection<IUser>

    constructor(db: Db) {
        this.db = db
        this.users = db.collection('users')
    }

    public getConnection(): Db {
        return this.db
    }
}
