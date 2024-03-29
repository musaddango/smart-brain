require('dotenv').config();
const redis = require('redis');


const redisClient = redis.createClient({
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    }
})

(async()=>{
    redisClient.on('error', (err) => console.log('Redis Client Error', err));
    await redisClient.connect();
})();



// (async () => {
//   const redisClient = redis.createClient({
//     url: process.env.REDIS_URI,
//   });
  
//   redisClient.on("error", console.error);
  
//   await redisClient.connect();
  
//   await redisClient.set("key", "value");
//   const value = await redisClient.get("key");
  
//    console.log(value);
//   })();

module.exports = redisClient;