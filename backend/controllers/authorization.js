const redisClient = require('./signin').redisClient;

const requireAuth = (req, res, next)=>{
    const { authorization } = req.headers;
    if(!authorization){
        return res.status(400).json('Unauthorized');
    }
    redisClient.get(authorization, (err, result)=>{
        if(err || !result){
            return res.status(400).json('Unauthorized');
        }
        return next();
    })
}

module.exports = {
    requireAuth
}