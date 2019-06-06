import express from 'express'

import morgan from 'morgan'
import os from 'os'

import { router } from './src/router/router'
import * as userService from './src/service/user.service'

const app = express()
const port = Number(process.env.PORT) || 8080 // default port to listen
app.use(morgan('combined'))
app.use(express.json())
app.use(router)
app.listen(port, () => {
  console.log(`server started at http://${os.hostname}:${port}`)
})

userService.init().then((s: any) => console.log('service started.', s))
