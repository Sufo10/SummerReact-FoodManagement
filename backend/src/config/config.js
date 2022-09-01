// const dotenv = require('dotenv')
require('dotenv').config();
// dotenv.config();

const configuration = {
  PORT: process.env.PORT,
  URI: process.env.URI,
  SECRET: process.env.SECRET,
};

module.exports = configuration;
