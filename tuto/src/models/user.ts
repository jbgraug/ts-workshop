import { ROLES } from '../enums'
import { IEquals, IUser } from '../interfaces'
import { Person } from './person'

export class User extends Person implements IUser {

  public username: string
  public role: ROLES
  private password: string

  constructor(
    { firstName, lastName, role, username, password }:
    { firstName: string, lastName: string, role: ROLES, username: string, password: string },
  ) {
   super({ firstName, lastName})
   this.role = role
   this.username = username
   this.password = password
  }

  public checkPassword(password: string): boolean {
    return this.password === password
  }

}
