
import {nanoid} from 'nanoid'

const shortUrl = async (req, res) => {
  try {
    const url = req.body.url

    if(!url) {
      return res.status(global.statusCode.badRequest).send({status: false, message: 'Original Url is missing'})
    }

    let shortid = nanoid(6)
    let short_url = `http://localhost:8080/api/v1/shortUrl/${shortid}`
    
    await global.redis.set(shortid,url,{EX: 300})
    res.status(global.statusCode.success).send({status: true, message: short_url})
  } catch (err) {
    res.status(global.statusCode.internalServerError).send({status: false, 'message': 'Internal server error'})
  }
}


const redirectToOriginal = async (req,res) => {
  try {
    let key = req.params.key
    
    let original = await global.redis.get(key)
    
    if(!original) return res.status(global.statusCode.notFound).send({status: false, message: 'Invalid url'})
      
    res.redirect(original)
  } catch (err) {
    console.log(err)
    res.status(global.statusCode.internalServerError).send({status: false, 'message': 'Internal server error'})
  }
}


export {shortUrl,redirectToOriginal}