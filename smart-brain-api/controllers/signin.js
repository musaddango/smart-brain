const jwt = require('jsonwebtoken');
const Redis = require('ioredis');
require('dotenv').config();

const redisClient = new Redis(process.env.REDIS_PORT, process.env.REDIS_HOST);

const handleSignin = (db, bcrypt) => (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json('incorrect form submission');
  }
  return db.select('email', 'hash').from('login')
    .where('email', '=', email)
    .then(data => {
      const isValid = bcrypt.compareSync(password, data[0].hash);
      if (isValid) {
        return db.select('*').from('users')
          .where('email', '=', email)
          .then(user => user[0])
          .catch((err) => Promise.reject('unable to get user'))
      } else {
        return Promise.reject('wrong credentials')
      }
    })
    .catch(err => res.status(400).json('wrong credentials'))
}

const getAuthTokenId = async (req, res) =>{
  const { authorization } = req.headers
  return await redisClient.get(authorization, (err, result)=>{
    if(err || !result){
      return res.status(400).json("Unauthorized");
    }else{
      return res.json({authUserId: result, authenticated: "true"});
    }
  });
}

const signToken = (email) =>{
  const jwtpayload = { email };
  return jwt.sign(jwtpayload, process.env.JWT_SECRET, { expiresIn: '2 days'})
}

const setToken = async (key, value) => {
  // Set token using the redisClient
    return Promise.resolve(await redisClient.set(key, value));
}

const createSessions = (user) => {
  // JWT session, user data
  const { email, id } = user;
  const token = signToken(email); //jwt.sign({email, id}, process.env.JWT_SECRET);
  return setToken(token, id)
        .then(()=>{
          return {success: 'true', token, userId: id}
        })
        .catch(()=> 'Failed to set token');
}

const signinAuthentication = (db, bcrypt)=> (req, res) =>{
  const { authorization } = req.headers;
  return authorization ? getAuthTokenId(req, res) :
      handleSignin(db, bcrypt)(req, res)
      .then(data =>{
        return data.id && data.email ? createSessions(data) : Promise.reject(data);
      })
      .then(session => session ? res.json(session): null) 
      .catch(err => res.status(400).json(err))
}

module.exports = {
  handleSignin,
  signinAuthentication,
  redisClient
}