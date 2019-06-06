import { ObjectID } from 'mongodb'

export interface IDBConfig {
    connection: string
    dbName: string
}

export interface IAppConfig {
    db: IDBConfig
}

export interface IUser {
    name: string
    email: string
    _id?: ObjectID
    password: string
    role: string
    country: string
    reportsToUser?: string
}
