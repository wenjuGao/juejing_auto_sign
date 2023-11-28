require('dotenv').config()
module.exports = {
  COOKIE: process.env.COOKIE || '',
  TOKEN: process.env.TOKEN || '',
  SERVERID: process.env.SERVERID || '' // server酱
}
