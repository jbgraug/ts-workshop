import { IPerson } from '../interfaces'
import { IEquals } from '../interfaces'

export class Person implements IPerson, IEquals<Person> {
  public id: string
  public firstName: string
  public lastName: string

  constructor(
    { firstName, lastName }:
    { firstName: string, lastName: string },
  ) {
    this.firstName = firstName
    this.lastName = lastName
  }

  public equals(person: Person): boolean {
   return this.id === person.id
  }
  public getFullname(): string {
    return this.firstName + ' ' + this.lastName
  }

}
