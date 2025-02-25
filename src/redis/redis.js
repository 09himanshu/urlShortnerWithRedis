import {createClient} from 'redis'


class redisClient {
  constructor(host,port,password) {
    console.log(host,port,password);
    
    this.client = createClient({
      socket: {
        host,
        port
      },
      password
    })
    this.client.on('connect', () => {
      console.log(`Connected to Redis`);
    })
    this.client.on('error', (err) => {
      console.log(`Error while connecting ${err}`);
    })
    this.client.connect()
  }

  async set(key, value,options = {}) {
    try {
      if(!Object.keys(options).length) {
        return await this.client.set(key,value)
      } else {
        await this.client.set(key, value, options)
      }
    } catch (err) {
      console.log(err)
    }
  }

  async get(key) {
    return await this.client.get(key)
  }
}

export {redisClient}