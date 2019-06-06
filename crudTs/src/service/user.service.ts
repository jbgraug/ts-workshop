import { Cursor, Db, InsertOneWriteOpResult } from 'mongodb'
import { ObjectId } from 'mongodb'
import { IUser } from 'src/interfaces'
import util from 'util'
import { db } from '../persistence/db.connection'
import { MainRepository } from '../persistence/main.repository'

let database: Db
let mainRepository: MainRepository

const getUsers = async () => {
  const usersCursor: Cursor<IUser> = await mainRepository.users.find({})
  const users = await usersCursor.toArray()
  return users
  }

const getUserCount = async () => {
  const usersCount = await mainRepository.users.find({}).count()
  return usersCount
}

const getUserById = async (id: string) => {
  const usersCursor: Cursor<IUser> = await mainRepository.users.find({_id: new ObjectId(id) })
  const users = await usersCursor.toArray()
  return users && users[0]
}

const createUser = async (user: IUser): Promise<IUser> => {
  const result: InsertOneWriteOpResult = await mainRepository.users.insertOne(user)
  user._id = result.insertedId
  return user
}

const init = async () => {
  database = await db
  mainRepository = new MainRepository(database)
  return true
}

export {
  init,
  getUsers,
  getUserById,
  getUserCount,
  createUser,
}
