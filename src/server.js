import express from 'express'
import {redisClient} from './redis/redis.js'
import {statusCode} from './constants/constant.js'
import ping from './routes/ping.routes.js'
import urls from './routes/url.routes.js'

const app = express()
app.use(express.json())

// Set redis to global
// let redis = new redisClient('redis-13597.crce182.ap-south-1-1.ec2.redns.redis-cloud.com',13597,'0GjwPiZfhPmE3fII3FUQ0CT8kXQ4916P')
let redis = new redisClient(process.env.REDIS_HOST,process.env.REDIS_PORT,process.env.REDIS_PASSWORD)
global.redis = redis

// Set statusCode to global
global.statusCode = statusCode

// Routes
app.use('/api/v1/', ping)
app.use('/api/v1/', urls)


app.listen(8080, () => {
  console.log(`Server is running on port ${8080}`)
})