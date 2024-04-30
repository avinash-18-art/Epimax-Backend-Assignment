const jwt = require('jsonwebtoken')
const {User} = require('../models')

const verifyToken = async (req, res, next) => {
  const token = req.headers['authorization']

  if (!token) {
    return res.status(401).json({error: 'Unauthorized'})
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = await User.findByPk(decoded.id)
    next()
  } catch (error) {
    res.status(403).json({error: 'Invalid token'})
  }
}

module.exports = {
  verifyToken,
}
