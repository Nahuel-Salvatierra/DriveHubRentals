import express, { Request, Response, Application } from 'express'
import { configDIC } from '../config/configDIC'
import { DIContainer } from 'rsdi'
import { initCustomerModule } from '../module/customer/customer.module'

import cors from 'cors'
require('dotenv').config({
  path: '.env.test'
})

export default function AppBootstrap (): { container: DIContainer, testApp: Application } {
  const testApp = express()

  const container = configDIC()
  testApp.use(cors())
  testApp.use(express.json())
  testApp.use(express.urlencoded({ extended: true }))


  initCustomerModule(testApp,container)

  testApp.use(function (err: any, req: Request, res: Response) {
    console.log(err)
    res.status(err.code)
    res.json(err)
  })

  return { container,  testApp }
}
