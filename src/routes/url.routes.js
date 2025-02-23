import express from 'express'
import * as controller from '../controllers/urls.controller.js'

const router = express.Router()

router.post('/shortUrl', controller.shortUrl)
router.get('/shortUrl/:key',controller.redirectToOriginal)

export default router