const redisClient = require("./signin").redisClient;

const logoutController =async (req, res) => {
    const { authorization } = req.headers;
    await redisClient.del(authorization);
    return res.status(200).json('success');
}

module.exports = {
    logoutController
};