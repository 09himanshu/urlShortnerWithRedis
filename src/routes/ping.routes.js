import express from 'express'
import * as controller from '../controllers/ping.controller.js'

const router = express.Router()

router.get('/ping', controller.ping)

export default router