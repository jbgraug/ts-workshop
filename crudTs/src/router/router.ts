import { NextFunction, Request, Response, Router } from 'express'
import { IUser } from 'src/interfaces'
import { createUser, getUserById, getUserCount, getUsers } from '../service/user.service'

const BASE_URL = '/api'

const router = Router()

router.get(`${BASE_URL}/`, (req: Request, res: Response) => {
    res.sendFile(__dirname + '/package.json')
})

router.get(`${BASE_URL}/users`, async (req: Request, res: Response) => {
    const users = await getUsers()
    res.send(users)
})

router.get(`${BASE_URL}/users/count`, async (req: Request, res: Response) => {
    const usersCount = await getUserCount()
    res.send(String(usersCount))
})

router.get(`${BASE_URL}/users/:id`, async (req: Request, res: Response) => {
    const user = await getUserById(req.params.id)
    res.send(user)
})

router.post(`${BASE_URL}/users`, async (req: Request, res: Response) => {
    const newUser: IUser = {
        country: req.body.country,
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
        role: req.body.role,
    }
    const user = await createUser(newUser)
    res.send(user)
})

export {
    router,
}
