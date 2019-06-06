import { ROLES } from './src/enums'
import * as oldStuff from './src/lib/old-stuff'
import { Person } from './src/models/person'
import { User } from './src/models/user'

const log = console.log

const user = new User({
  firstName: 'juan',
  lastName: 'grau',
  password: '1234',
  role: ROLES.ADMIN,
  username: 'jbgraug',
})

log('User: ', user)
log('Check instanceof: ', user instanceof User)
const user2 = new User((user as any))
log('User2', user2)
log('User 1 === 2?', user === user2)
log('User 1 equals 2?', user.equals(user2))
log('Check password:', user.checkPassword('12324'))

const fullName = oldStuff.getFullname(user)
console.log(fullName)

const people = [
  new Person({
    firstName: 'paco',
    lastName: 'perez',
  }),
]

console.log('people', people)
