// import {statusCode} from '../constants/constant.js'

const ping = async (req, res) => {
  try {
    res.status(global.statusCode.success).send({status: true, message: `Server is running`})
  } catch (err) {
    res.status(global.statusCode.internalServerError).send({status: false, message: `Internal server error`})
  }
}

export {ping}