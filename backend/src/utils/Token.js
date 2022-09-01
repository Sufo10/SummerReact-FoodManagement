const jwt = require('jsonwebtoken');
const User = require('../database/schemas/userSchema');
const config = require('../config/config');

const createToken = _id => {
  return jwt.sign({ _id }, config.SECRET, { expiresIn: '3d' });
};

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const { _id } = jwt.verify(token, config.SECRET);

    const user = await User.findById({ _id });
    if (!user) return res.status(401).json({ message: 'Unauthorized' });

    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};
module.exports = { createToken, verifyToken };
