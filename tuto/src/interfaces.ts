import { ObjectID } from 'bson'
import { ROLES } from './enums'

interface IPerson {
    _id?: ObjectID
    firstName: string
    lastName: string
}

interface IUser extends IPerson {
    username: string
    role: ROLES
}

interface IEquals<T> {
    equals(element: T): boolean
}

interface ICheckPassword {
    checkPassword(password: string): boolean
}

interface IGetFullname {
    getFullname(): string
}

export {
    IEquals, IPerson, IUser,
}
